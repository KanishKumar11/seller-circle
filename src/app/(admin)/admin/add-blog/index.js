"use client";

import { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  TextField,
  Typography,
  Paper,
  CircularProgress,
  Divider,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PublishIcon from "@mui/icons-material/Publish";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import CodeIcon from "@mui/icons-material/Code";
import TitleIcon from "@mui/icons-material/Title";
import LinkIcon from "@mui/icons-material/Link";
import ImageIcon from "@mui/icons-material/Image";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import TipTapLink from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useDispatch, useSelector } from "react-redux";
import {
  addblog,
  fetchCategoriesAction,
  getAllBlogsAction,
  UpdateBlogAction,
} from "@/store/slices/BlogSlice";
import { useSearchParams, useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import Youtube from "@tiptap/extension-youtube";

// Styled components
const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const ImageUploadBox = styled(Paper)(({ theme }) => ({
  border: `2px dashed ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  textAlign: "center",
  cursor: "pointer",
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const EditorToolbarButton = styled(IconButton)(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  backgroundColor: active ? theme.palette.action.selected : "transparent",
  margin: theme.spacing(0.5),
  padding: theme.spacing(1),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

// Helper function to handle file to base64
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

// Extract YouTube ID from URL
const getYoutubeVideoId = (url) => {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
};

export default function AddBlogIndex() {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fetchedContent, setFetchedContent] = useState(null);
  const [blogType, setBlogType] = useState("Simple");
  const [formPosition, setFormPosition] = useState("Right");
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  // Image upload dialog state
  const [imageUploadOpen, setImageUploadOpen] = useState(false);
  const [editorImageFile, setEditorImageFile] = useState(null);
  const [editorImagePreview, setEditorImagePreview] = useState(null);

  // YouTube embed dialog state
  const [youtubeDialogOpen, setYoutubeDialogOpen] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const editorImageInputRef = useRef(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const result = await dispatch(fetchCategoriesAction()).unwrap();
        console.log("blogg  Categories loaded from API:", result);
      } catch (err) {
        console.error("Failed to load categories:", err);
      }
    };
    loadCategories();
  }, [dispatch]);
  const { categories, status, error } = useSelector((state) => state.blog);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6], // Update this to include all heading levels
      }),
      TipTapLink.configure({
        openOnClick: false,
      }),
      Image.configure({
        inline: true,
      }),
      Youtube.configure({
        controls: true,
        modestBranding: true,
        width: 640,
        height: 360,
      }),
    ],
  });

  const fileInputRef = useRef(null);
  const searchParams = useSearchParams();
  const editId = searchParams.get("editblogId");

  const { control, handleSubmit, watch, setValue, register } = useForm({
    defaultValues: {
      title: "",
      slug: "",
      category: "",
      file: "",
      metaDescription: "",
    },
  });

  const title = watch("title");
  const selectedCategory = watch("category");

  useEffect(() => {
    if (editId) {
      dispatch(getAllBlogsAction())
        .unwrap()
        .then((data) => {
          const editorData = data.find((blog) => blog._id === editId);
          console.log(editorData);
          if (editorData) {
            setValue("title", editorData.title);
            setValue("slug", editorData.slug);
            setValue("category", editorData.category);
            setValue("metaDescription", editorData.metaDescription || "");
            setFetchedContent(editorData.content); // Store content separately
            setBlogType(
              editorData.blogType
                ? editorData.blogType.charAt(0).toUpperCase() +
                    editorData.blogType.slice(1)
                : "Simple"
            );
            // Handle image preview
            const base64String = editorData?.imageBase64;
            setImagePreview(base64String);
          }
        })
        .catch((error) => {
          console.error("Error fetching blog data:", error);
        });
    }
  }, [editId, dispatch, setValue]);

  useEffect(() => {
    if (editor && fetchedContent) {
      editor.commands.setContent(fetchedContent);
      setFetchedContent(null); // Clear after setting to prevent re-renders
    }
  }, [editor, fetchedContent]);

  // Update slug when title changes
  useEffect(() => {
    if (title) {
      const slug = title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-");

      setValue("slug", slug);
    }
  }, [title, setValue]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle editor image upload
  const handleEditorImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setEditorImagePreview(reader.result);
        setEditorImageFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  // Insert editor image
  const insertEditorImage = async () => {
    if (editor && editorImagePreview) {
      editor.chain().focus().setImage({ src: editorImagePreview }).run();
      setImageUploadOpen(false);
      setEditorImageFile(null);
      setEditorImagePreview(null);

      // You can handle actual image upload to server here and replace with permanent URL
      // For now we're just using the base64 data
    }
  };

  const insertYoutubeVideo = () => {
    if (editor && youtubeUrl) {
      const videoId = getYoutubeVideoId(youtubeUrl);
      if (videoId) {
        editor
          .chain()
          .focus()
          .setYoutubeVideo({ src: youtubeUrl })
          // Add these commands to create space after the video
          .command(({ tr }) => {
            const { $to } = tr.selection;
            const after = $to.end();
            if (after !== undefined) {
              tr.insert(after, editor.schema.nodes.paragraph.create());
            }
            return true;
          })
          .run();
        setYoutubeDialogOpen(false);
        setYoutubeUrl("");
      } else {
        enqueueSnackbar("Invalid YouTube URL", { variant: "error" });
      }
    }
  };
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Get editor content
      const content = editor ? editor.getHTML() : "";

      // Determine which category to use (selected or new)
      const finalCategory = data.category;

      // Construct the data object for the API call
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", content);
      formData.append("slug", data.slug);
      formData.append("category", data.category);
      formData.append("blogType", blogType.toLowerCase());
      formData.append("metaDescription", data.metaDescription || "");
      if (blogType === "Lead") {
        formData.append("position", formPosition.toLowerCase());
      }
      if (fileInputRef.current.files[0]) {
        formData.append("file", fileInputRef.current.files[0]);
      }
      if (formData && !editId) {
        console.log(...formData);
        dispatch(addblog(formData))
          .unwrap()
          .then((data) => {
            console.log(data);
            setValue("title", "");
            setValue("slug", "");
            setValue("category", "");
            setValue("metaDescription", "");
            setImagePreview(null);
            editor.commands.setContent("");
            enqueueSnackbar("Blog post created successfully", {
              variant: "success",
            });
            router.push("/admin/all-blog");
          })
          .catch((error) => {
            console.log(error);
            enqueueSnackbar("Failed to create blog post", { variant: "error" });
          });
      } else if (formData && editId) {
        dispatch(UpdateBlogAction({ editId, formData }))
          .unwrap()
          .then(() => {
            dispatch(getAllBlogsAction());
            router.push("/admin/manage-blogs");
            enqueueSnackbar("Blog update successfully", { variant: "success" });
          })
          .catch((error) => {
            enqueueSnackbar(error, { variant: "error" });
          });
      }

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      enqueueSnackbar("Error submitting form", { variant: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add image to editor
  const openImageUploadDialog = () => {
    setImageUploadOpen(true);
  };

  // Set link in editor
  const setLink = () => {
    const url = prompt("Enter URL");
    if (url && editor) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  // Open YouTube embed dialog
  const openYoutubeDialog = () => {
    setYoutubeDialogOpen(true);
  };
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Card elevation={3}>
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            py: 4,
            px: 3,
            borderTopLeftRadius: 1,
            borderTopRightRadius: 1,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            {editId ? "Edit Blog Post" : "Create New Blog Post"}
          </Typography>
          <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
            Share your thoughts with the world
          </Typography>
        </Box>

        <CardContent sx={{ p: 4 }}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Featured Image
              </Typography>

              <ImageUploadBox
                onClick={() => fileInputRef.current.click()}
                elevation={0}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  name="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  style={{ display: "none" }}
                />

                {imagePreview ? (
                  <Box sx={{ width: "100%", textAlign: "center" }}>
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Preview"
                      style={{
                        maxHeight: "300px",
                        maxWidth: "100%",
                        objectFit: "contain",
                        borderRadius: "8px",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "success.main",
                        mt: 2,
                        fontWeight: 500,
                      }}
                    >
                      Image selected
                    </Typography>
                  </Box>
                ) : (
                  <>
                    <CloudUploadIcon
                      sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                    />
                    <Typography variant="body1" gutterBottom>
                      Click to upload an image
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      PNG, JPG or GIF (max. 5MB)
                    </Typography>
                  </>
                )}
              </ImageUploadBox>
            </Box>

            <TextField
              fullWidth
              id="outlined"
              label="Title"
              name="title"
              {...register("title", { required: true })}
              required
              sx={{ mb: 3 }}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              id="metaDescription"
              label="Meta Description"
              name="metaDescription"
              {...register("metaDescription")}
              sx={{ mb: 3 }}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              inputProps={{ maxLength: 160 }}
              helperText={`SEO description (max 160 characters)`}
            />
            <Typography variant="h6" gutterBottom>
              Content
            </Typography>

            <Paper
              variant="outlined"
              sx={{
                mb: 3,
                overflow: "hidden",
              }}
            >
              {/* Editor Toolbar */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  p: 1,
                  borderBottom: 1,
                  borderColor: "divider",
                  bgcolor: "action.hover",
                }}
              >
                <Tooltip title="Bold">
                  <EditorToolbarButton
                    active={editor?.isActive("bold")}
                    disabled={!editor}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    size="small"
                  >
                    <FormatBoldIcon fontSize="small" />
                  </EditorToolbarButton>
                </Tooltip>

                <Tooltip title="Italic">
                  <EditorToolbarButton
                    active={editor?.isActive("italic")}
                    disabled={!editor}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    size="small"
                  >
                    <FormatItalicIcon fontSize="small" />
                  </EditorToolbarButton>
                </Tooltip>
                {/* Heading Buttons */}
                <Tooltip title="Heading 1">
                  <EditorToolbarButton
                    active={editor?.isActive("heading", { level: 1 })}
                    disabled={!editor}
                    onClick={() =>
                      editor.chain().focus().toggleHeading({ level: 1 }).run()
                    }
                    size="small"
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <TitleIcon fontSize="small" />
                      <Typography variant="caption" sx={{ ml: 0.5 }}>
                        1
                      </Typography>
                    </Box>
                  </EditorToolbarButton>
                </Tooltip>

                <Tooltip title="Heading 2">
                  <EditorToolbarButton
                    active={editor?.isActive("heading", { level: 2 })}
                    disabled={!editor}
                    onClick={() =>
                      editor.chain().focus().toggleHeading({ level: 2 }).run()
                    }
                    size="small"
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <TitleIcon fontSize="small" />
                      <Typography variant="caption" sx={{ ml: 0.5 }}>
                        2
                      </Typography>
                    </Box>
                  </EditorToolbarButton>
                </Tooltip>

                <Tooltip title="Heading 3">
                  <EditorToolbarButton
                    active={editor?.isActive("heading", { level: 3 })}
                    disabled={!editor}
                    onClick={() =>
                      editor.chain().focus().toggleHeading({ level: 3 }).run()
                    }
                    size="small"
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <TitleIcon fontSize="small" />
                      <Typography variant="caption" sx={{ ml: 0.5 }}>
                        3
                      </Typography>
                    </Box>
                  </EditorToolbarButton>
                </Tooltip>

                <Tooltip title="Heading 4">
                  <EditorToolbarButton
                    active={editor?.isActive("heading", { level: 4 })}
                    disabled={!editor}
                    onClick={() =>
                      editor.chain().focus().toggleHeading({ level: 4 }).run()
                    }
                    size="small"
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <TitleIcon fontSize="small" />
                      <Typography variant="caption" sx={{ ml: 0.5 }}>
                        4
                      </Typography>
                    </Box>
                  </EditorToolbarButton>
                </Tooltip>

                <Tooltip title="Bullet List">
                  <EditorToolbarButton
                    active={editor?.isActive("bulletList")}
                    disabled={!editor}
                    onClick={() =>
                      editor.chain().focus().toggleBulletList().run()
                    }
                    size="small"
                  >
                    <FormatListBulletedIcon fontSize="small" />
                  </EditorToolbarButton>
                </Tooltip>

                <Tooltip title="Numbered List">
                  <EditorToolbarButton
                    active={editor?.isActive("orderedList")}
                    disabled={!editor}
                    onClick={() =>
                      editor.chain().focus().toggleOrderedList().run()
                    }
                    size="small"
                  >
                    <FormatListNumberedIcon fontSize="small" />
                  </EditorToolbarButton>
                </Tooltip>

                <Tooltip title="Blockquote">
                  <EditorToolbarButton
                    active={editor?.isActive("blockquote")}
                    disabled={!editor}
                    onClick={() =>
                      editor.chain().focus().toggleBlockquote().run()
                    }
                    size="small"
                  >
                    <FormatQuoteIcon fontSize="small" />
                  </EditorToolbarButton>
                </Tooltip>

                <Tooltip title="Code Block">
                  <EditorToolbarButton
                    active={editor?.isActive("codeBlock")}
                    disabled={!editor}
                    onClick={() =>
                      editor.chain().focus().toggleCodeBlock().run()
                    }
                    size="small"
                  >
                    <CodeIcon fontSize="small" />
                  </EditorToolbarButton>
                </Tooltip>

                <Tooltip title="Add Link">
                  <EditorToolbarButton
                    active={editor?.isActive("link")}
                    disabled={!editor}
                    onClick={setLink}
                    size="small"
                  >
                    <LinkIcon fontSize="small" />
                  </EditorToolbarButton>
                </Tooltip>

                <Tooltip title="Add Image">
                  <EditorToolbarButton
                    disabled={!editor}
                    onClick={openImageUploadDialog}
                    size="small"
                  >
                    <ImageIcon fontSize="small" />
                  </EditorToolbarButton>
                </Tooltip>

                <Tooltip title="Embed YouTube Video">
                  <EditorToolbarButton
                    disabled={!editor}
                    onClick={openYoutubeDialog}
                    size="small"
                  >
                    <YouTubeIcon fontSize="small" />
                  </EditorToolbarButton>
                </Tooltip>
              </Box>

              {/* Editor Content */}
              <Box sx={{ p: 2, minHeight: "300px" }}>
                {editor ? (
                  <EditorContent editor={editor} />
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "300px",
                    }}
                  >
                    <CircularProgress size={24} sx={{ mr: 1 }} />
                    <Typography>Loading editor...</Typography>
                  </Box>
                )}
              </Box>
            </Paper>

            <Box
              sx={{
                display: "grid",
                gap: 3,
                gridTemplateColumns: { md: "1fr" },
                mb: 4,
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="category-label">Select Category</InputLabel>
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <MuiSelect
                      labelId="category-label"
                      label="Select Category"
                      {...field}
                    >
                      {categories.map((category) => (
                        <MenuItem key={category._id} value={category.catName}>
                          {category.catName}
                        </MenuItem>
                      ))}
                    </MuiSelect>
                  )}
                />
              </FormControl>
            </Box>

            <Box
              sx={{
                display: "grid",
                gap: 3,
                gridTemplateColumns: { md: "1fr" },
                mb: 4,
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="blogType">Blog Type</InputLabel>
                <MuiSelect
                  labelId="blogType"
                  label="Blog Type"
                  value={blogType}
                  onChange={(e) => setBlogType(e.target.value)}
                >
                  <MenuItem value="Simple">Simple</MenuItem>
                  <MenuItem value="Lead">Lead</MenuItem>
                </MuiSelect>
              </FormControl>
            </Box>

            {blogType === "Lead" && (
              <Box
                sx={{
                  display: "grid",
                  gap: 3,
                  gridTemplateColumns: { md: "1fr" },
                  mb: 4,
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="form-position-label">
                    Form Position
                  </InputLabel>
                  <MuiSelect
                    labelId="form-position-label"
                    label="Form Position"
                    value={formPosition}
                    onChange={(e) => setFormPosition(e.target.value)}
                  >
                    <MenuItem value="Left">Left</MenuItem>
                    <MenuItem value="Right">Right</MenuItem>
                  </MuiSelect>
                </FormControl>
              </Box>
            )}

            <Divider sx={{ mb: 3 }} />

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                startIcon={
                  isSubmitting ? (
                    <CircularProgress size={20} />
                  ) : (
                    <PublishIcon />
                  )
                }
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: "1.1rem",
                }}
              >
                {isSubmitting
                  ? "Publishing..."
                  : editId
                  ? "Update Blog Post"
                  : "Publish Blog Post"}
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Image Upload Dialog */}
      <Dialog
        open={imageUploadOpen}
        onClose={() => setImageUploadOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Upload Image</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <ImageUploadBox
              onClick={() => editorImageInputRef.current.click()}
              elevation={0}
            >
              <input
                type="file"
                ref={editorImageInputRef}
                onChange={handleEditorImageChange}
                accept="image/*"
                style={{ display: "none" }}
              />

              {editorImagePreview ? (
                <Box sx={{ width: "100%", textAlign: "center" }}>
                  <img
                    src={editorImagePreview}
                    alt="Preview"
                    style={{
                      maxHeight: "300px",
                      maxWidth: "100%",
                      objectFit: "contain",
                      borderRadius: "8px",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "success.main",
                      mt: 2,
                      fontWeight: 500,
                    }}
                  >
                    Image selected
                  </Typography>
                </Box>
              ) : (
                <>
                  <CloudUploadIcon
                    sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                  />
                  <Typography variant="body1" gutterBottom>
                    Click to upload an image
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    PNG, JPG or GIF (max. 5MB)
                  </Typography>
                </>
              )}
            </ImageUploadBox>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setImageUploadOpen(false)}>Cancel</Button>
          <Button
            onClick={insertEditorImage}
            variant="contained"
            disabled={!editorImagePreview}
          >
            Insert Image
          </Button>
        </DialogActions>
      </Dialog>

      {/* YouTube Embed Dialog */}
      <Dialog
        open={youtubeDialogOpen}
        onClose={() => setYoutubeDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Embed YouTube Video</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="YouTube URL"
              placeholder="https://www.youtube.com/watch?v=..."
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              variant="outlined"
              helperText="Enter a valid YouTube URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setYoutubeDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={insertYoutubeVideo}
            variant="contained"
            disabled={!youtubeUrl}
            startIcon={<YouTubeIcon />}
          >
            Embed Video
          </Button>
        </DialogActions>
      </Dialog>

      {/* Custom styles for TipTap */}
      <style jsx global>{`
        /* Base editor styles */
        .ProseMirror {
          min-height: 300px;
          outline: none;
          font-family: inherit;
          padding: 0.75rem;
          color: #333;
          line-height: 1.6;
        }

        /* Placeholder text */
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #adb5bd;
          pointer-events: none;
          height: 0;
        }

        /* Basic text elements */
        .ProseMirror p {
          margin: 0.75rem 0;
        }

        /* Images */
        .ProseMirror img {
          max-width: 100%;
          height: auto;
          margin: 1.5rem 0;
          border-radius: 4px;
          display: block;
        }

        /* Blockquotes */
        .ProseMirror blockquote {
          border-left: 4px solid #1976d2;
          padding: 0.75rem 1.25rem;
          margin: 1.5rem 0;
          background-color: rgba(25, 118, 210, 0.05);
          border-radius: 0 4px 4px 0;
          font-style: italic;
          color: #555;
        }

        /* Code blocks */
        .ProseMirror pre {
          background-color: #1e293b;
          color: #e2e8f0;
          padding: 1rem 1.25rem;
          border-radius: 6px;
          overflow-x: auto;
          font-family: "Consolas", "Monaco", "Courier New", monospace;
          margin: 1.5rem 0;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .ProseMirror code {
          background-color: rgba(0, 0, 0, 0.05);
          padding: 0.2em 0.4em;
          border-radius: 3px;
          font-family: "Consolas", "Monaco", "Courier New", monospace;
          font-size: 0.9em;
        }

        /* Horizontal rule */
        .ProseMirror hr {
          border: none;
          border-top: 2px solid rgba(0, 0, 0, 0.1);
          margin: 2rem 0;
        }

        .ProseMirror h1 {
          font-size: 2.5rem; /* Largest size */
          line-height: 1.2;
          font-weight: 700;
          margin: 2rem 0 1rem;
          color: rgb(0, 0, 0);
        }

        .ProseMirror h2 {
          font-size: 1.8rem; /* Smaller than h1 */
          line-height: 1.35;
          font-weight: 700;
          margin: 1.75rem 0 0.875rem;
          color: rgb(0, 0, 0);
        }

        .ProseMirror h3 {
          font-size: 1.5rem; /* Smaller than h2 */
          line-height: 1.4;
          font-weight: 600;
          margin: 1.5rem 0 0.75rem;
          color: rgb(0, 0, 0);
        }

        .ProseMirror h4 {
          font-size: 1.25rem; /* Smaller than h3 */
          line-height: 1.45;
          font-weight: 600;
          margin: 1.25rem 0 0.625rem;
          color: rgb(0, 0, 0);
        }

        .ProseMirror h5 {
          font-size: 1.1rem; /* Smaller than h4 */
          line-height: 1.5;
          font-weight: 600;
          margin: 1rem 0 0.5rem;
          color: rgb(0, 0, 0);
        }

        .ProseMirror h6 {
          font-size: 1rem; /* Smallest */
          line-height: 1.5;
          font-weight: 600;
          margin: 1rem 0 0.5rem;
          color: rgb(0, 0, 0);
          font-style: italic;
        }

        /* List styling */
        .ProseMirror ul,
        .ProseMirror ol {
          padding-left: 1.75rem;
          margin: 1rem 0;
        }

        .ProseMirror ul {
          list-style-type: disc;
        }

        .ProseMirror ul ul {
          list-style-type: circle;
          margin: 0.25rem 0;
        }

        .ProseMirror ul ul ul {
          list-style-type: square;
        }

        .ProseMirror ol {
          list-style-type: decimal;
        }

        .ProseMirror ol ol {
          list-style-type: lower-alpha;
          margin: 0.25rem 0;
        }

        .ProseMirror ol ol ol {
          list-style-type: lower-roman;
        }

        .ProseMirror li {
          margin: 0.5rem 0;
          padding-left: 0.25rem;
        }

        .ProseMirror li p {
          margin: 0.25rem 0;
        }

        /* Links */
        .ProseMirror a {
          color: #1976d2;
          text-decoration: underline;
          transition: color 0.2s;
        }

        .ProseMirror a:hover {
          color: #0f5298;
        }

        /* YouTube embeds */
        .ProseMirror .youtube-wrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
          margin: 1.5rem 0;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .ProseMirror .youtube-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
          border-radius: 8px;
        }

        /* Table styles */
        .ProseMirror table {
          border-collapse: collapse;
          width: 100%;
          margin: 1.5rem 0;
          overflow: hidden;
          border-radius: 4px;
        }

        .ProseMirror th {
          background-color: rgba(25, 118, 210, 0.1);
          font-weight: 600;
          text-align: left;
        }

        .ProseMirror th,
        .ProseMirror td {
          border: 1px solid #e2e8f0;
          padding: 0.75rem;
        }

        .ProseMirror tr:nth-child(even) {
          background-color: rgba(0, 0, 0, 0.02);
        }

        /* Focus styles */
        .ProseMirror:focus {
          box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.1);
        }

        /* Selection styles */
        .ProseMirror ::selection {
          background: rgba(25, 118, 210, 0.2);
        }

        /* Editor active element styling */
        .ProseMirror h1.has-focus,
        .ProseMirror h2.has-focus,
        .ProseMirror h3.has-focus,
        .ProseMirror h4.has-focus,
        .ProseMirror h5.has-focus,
        .ProseMirror h6.has-focus,
        .ProseMirror p.has-focus,
        .ProseMirror li.has-focus {
          background-color: rgba(25, 118, 210, 0.05);
          border-radius: 3px;
        }

        /* TaskList styling (if added as extension) */
        .ProseMirror ul[data-type="taskList"] {
          list-style: none;
          padding: 0;
        }

        .ProseMirror ul[data-type="taskList"] li {
          display: flex;
          align-items: center;
        }

        .ProseMirror ul[data-type="taskList"] li > label {
          margin-right: 0.5rem;
        }

        .ProseMirror ul[data-type="taskList"] li > div {
          flex: 1;
        }
      `}</style>
    </Container>
  );
}
