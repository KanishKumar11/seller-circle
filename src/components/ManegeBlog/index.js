// "use client";

// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   Chip,
//   IconButton,
//   Stack,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   Tooltip,
//   Typography,
//   styled,
//   useTheme,
// } from "@mui/material";
// import {
//   Delete,
//   Edit,
//   PostAdd,
//   Search,
//   CheckCircle,
//   Drafts,
//   Archive,
//   Visibility,
// } from "@mui/icons-material";
// import { useState } from "react";

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   transition: theme.transitions.create("background-color"),
//   "&:hover": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": { border: 0 },
// }));

// const StatusBadge = styled(Chip)(({ theme, status }) => ({
//   fontWeight: 500,
//   borderRadius: "4px",
//   border: `1px solid ${theme.palette.divider}`,
//   ...(status === "published" && {
//     backgroundColor: theme.palette.success.light,
//     color: theme.palette.success.contrastText,
//   }),
//   ...(status === "draft" && {
//     backgroundColor: theme.palette.background.paper,
//     color: theme.palette.text.primary,
//   }),
//   ...(status === "archived" && {
//     backgroundColor: theme.palette.grey[300],
//     color: theme.palette.text.primary,
//   }),
// }));

// const dummyBlogs = [
//   {
//     id: 1,
//     title: "Introduction to Web Development",
//     author: "Sarah Johnson",
//     category: "Technology",
//     status: "published",
//     publishDate: "2024-03-15",
//     thumbnail: "https://example.com/tech-thumb.jpg",
//   },
//   {
//     id: 2,
//     title: "Modern Architecture Trends",
//     author: "Mike Chen",
//     category: "Design",
//     status: "draft",
//     publishDate: "2024-03-18",
//     thumbnail: "https://example.com/design-thumb.jpg",
//   },
//   {
//     id: 3,
//     title: "Sustainable Living Guide",
//     author: "Emma Wilson",
//     category: "Lifestyle",
//     status: "archived",
//     publishDate: "2024-02-28",
//     thumbnail: "https://example.com/life-thumb.jpg",
//   },
// ];

// const BlogManagementTable = ({
//   blogs = dummyBlogs,
//   onDelete,
//   onEdit,
//   onAddNew,
//   onView,
// }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const theme = useTheme();

//   const filteredBlogs = blogs.filter(
//     (blog) =>
//       blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       blog.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const getStatusIcon = (status) => {
//     const icons = {
//       published: <CheckCircle fontSize="small" />,
//       draft: <Drafts fontSize="small" />,
//       archived: <Archive fontSize="small" />,
//     };
//     return icons[status];
//   };

//   return (
//     <Card
//       sx={{
//         borderRadius: 2,
//         boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//         border: `1px solid ${theme.palette.divider}`,
//       }}
//     >
//       <Stack
//         direction={{ xs: "column", md: "row" }}
//         justifyContent="space-between"
//         alignItems="center"
//         p={3}
//         gap={2}
//         sx={{
//           bgcolor: "background.paper",
//           borderBottom: `1px solid ${theme.palette.divider}`,
//         }}
//       >
//         <Typography variant="h6" fontWeight={700} color="text.primary">
//           Blog Management
//         </Typography>

//         <Stack direction="row" gap={2} width={{ xs: "100%", md: "60%" }}>
//           <TextField
//             fullWidth
//             size="small"
//             variant="outlined"
//             placeholder="Search blogs..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             InputProps={{
//               startAdornment: <Search sx={{ color: "text.secondary" }} />,
//               sx: {
//                 borderRadius: 1,
//                 bgcolor: "background.paper",
//               },
//             }}
//           />
//           <Button
//             variant="contained"
//             startIcon={<PostAdd />}
//             onClick={onAddNew}
//             sx={{
//               borderRadius: 1,
//               whiteSpace: "nowrap",
//               minWidth: "fit-content",
//               bgcolor: "text.primary",
//               color: "background.paper",
//               "&:hover": {
//                 bgcolor: "text.secondary",
//               },
//             }}
//           >
//             New Post
//           </Button>
//         </Stack>
//       </Stack>

//       <TableContainer>
//         <Table sx={{ minWidth: 800 }}>
//           <TableHead>
//             <TableRow sx={{ bgcolor: "background.default" }}>
//               {[
//                 "Thumbnail",
//                 "Title",
//                 "Author",
//                 "Category",
//                 "Status",
//                 "Publish Date",
//                 "Actions",
//               ].map((header) => (
//                 <TableCell
//                   key={header}
//                   sx={{
//                     py: 2,
//                     fontWeight: 700,
//                     color: "text.primary",
//                     borderBottom: `2px solid ${theme.palette.divider}`,
//                   }}
//                 >
//                   {header}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {filteredBlogs.map((blog) => (
//               <StyledTableRow key={blog.id}>
//                 <TableCell sx={{ py: 1.5 }}>
//                   <Avatar
//                     variant="square"
//                     src={blog.thumbnail}
//                     sx={{
//                       width: 60,
//                       height: 40,
//                       bgcolor: "background.default",
//                       borderRadius: 1,
//                     }}
//                   >
//                     {blog.title.charAt(0)}
//                   </Avatar>
//                 </TableCell>

//                 <TableCell>
//                   <Typography variant="body1" fontWeight={500}>
//                     {blog.title}
//                   </Typography>
//                 </TableCell>

//                 <TableCell>
//                   <Typography variant="body2" color="text.secondary">
//                     {blog.author}
//                   </Typography>
//                 </TableCell>

//                 <TableCell>
//                   <Chip
//                     label={blog.category}
//                     size="small"
//                     sx={{
//                       bgcolor: "background.default",
//                       borderRadius: 1,
//                       fontWeight: 500,
//                     }}
//                   />
//                 </TableCell>

//                 <TableCell>
//                   <StatusBadge
//                     status={blog.status}
//                     icon={getStatusIcon(blog.status)}
//                     label={
//                       blog.status.charAt(0).toUpperCase() + blog.status.slice(1)
//                     }
//                   />
//                 </TableCell>

//                 <TableCell>
//                   <Typography variant="body2" color="text.secondary">
//                     {new Date(blog.publishDate).toLocaleDateString()}
//                   </Typography>
//                 </TableCell>

//                 <TableCell>
//                   <Stack direction="row" gap={1}>
//                     <Tooltip title="View">
//                       <IconButton
//                         size="small"
//                         onClick={() => onView(blog.id)}
//                         sx={{ color: "text.secondary" }}
//                       >
//                         <Visibility fontSize="small" />
//                       </IconButton>
//                     </Tooltip>
//                     <Tooltip title="Edit">
//                       <IconButton
//                         size="small"
//                         onClick={() => onEdit(blog)}
//                         sx={{ color: "text.secondary" }}
//                       >
//                         <Edit fontSize="small" />
//                       </IconButton>
//                     </Tooltip>
//                     <Tooltip title="Delete">
//                       <IconButton
//                         size="small"
//                         onClick={() => onDelete(blog.id)}
//                         sx={{ color: "text.secondary" }}
//                       >
//                         <Delete fontSize="small" />
//                       </IconButton>
//                     </Tooltip>
//                   </Stack>
//                 </TableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>

//         {!filteredBlogs.length && (
//           <Box py={4} textAlign="center">
//             <Search sx={{ fontSize: 48, color: "text.disabled", mb: 2 }} />
//             <Typography variant="body1" color="text.secondary">
//               No blog posts found matching your criteria
//             </Typography>
//           </Box>
//         )}
//       </TableContainer>
//     </Card>
//   );
// };

// export default BlogManagementTable;

"use client";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  styled,
  Pagination,
  Skeleton,
} from "@mui/material";
import { Edit, Delete, PersonAdd, Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { useSearchParams } from "next/navigation";
import { useSnackbar } from "notistack";
import { deleteBlogById, getMyBlogsAction } from "@/store/slices/BlogSlice";
import ConfirmationModal from "../confirmationmadal";
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export default function BlogManagementTable({
  onEdit,
  onRemove,
  loading = false,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const rowsPerPage = 10;
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const dispatch = useDispatch();
  const { myBlogData, isLoadingBlog } = useSelector((state) => state.blog);
  console.log(myBlogData, "myBlogData myBlogData myBlogData myBlogData ");

  useEffect(() => {
    dispatch(getMyBlogsAction())
      .unwrap()
      .then((data) => {
        console.log(data, "my blogs data ");
      })
      .catch((error) => {
        console.log(error, "error ");
      });
  }, [dispatch]);

  const filteredBlogs = [...(myBlogData || [])] // Create a shallow copy to avoid mutation
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by latest first
    .filter(
      (blog) =>
        // console.log(blog, "blog"),
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedBlogs = filteredBlogs?.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleEdit = (blog) => {
    const params = new URLSearchParams(window.location.search);
    params.set("editblogId", blog._id);
    params.delete("deleteblogId");
    router.push(`/admin/add-blog?${params.toString()}`, { scroll: false });
  };

  // const handleDelete = (blogId) => {
  //   const params = new URLSearchParams(window.location.search);
  //   params.set("deleteblogId", blogId); // Set deleteblogId
  //   params.delete("editblogId"); // Ensure editblogId is removed
  //   router.push(`?${params.toString()}`, { scroll: false });
  //   dispatch(deleteBlogById(blogId))
  //     .unwrap()
  //     .then((res) => {
  //       if (res) {
  //         params.delete("deleteblogId");
  //         enqueueSnackbar("blog delete sucessfuly", { variant: "success" });
  //         dispatch(getMyBlogsAction());
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("couldnt delete blog", error);
  //       enqueueSnackbar(error, { variant: "error" });
  //     });
  // };
  // Function to open delete confirmation modal
  const handleDelete = (blogId) => {
    setBlogToDelete(blogId);
    setDeleteModalOpen(true);
  };

  // Close modal without deleting
  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setBlogToDelete(null);
  };

  // Confirm deletion and process
  const handleConfirmDelete = () => {
    if (!blogToDelete) return;
    
    const params = new URLSearchParams(window.location.search);
    params.set("deleteblogId", blogToDelete);
    params.delete("editblogId");
    router.push(`?${params.toString()}`, { scroll: false });
    
    dispatch(deleteBlogById(blogToDelete))
      .unwrap()
      .then((res) => {
        if (res) {
          params.delete("deleteblogId");
          enqueueSnackbar("Blog deleted successfully", { variant: "success" });
          dispatch(getMyBlogsAction());
        }
      })
      .catch((error) => {
        console.log("couldn't delete blog", error);
        enqueueSnackbar(error, { variant: "error" });
      })
      .finally(() => {
        setDeleteModalOpen(false);
        setBlogToDelete(null);
      });
  };
  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h6" fontWeight={600}>
            Blog Management
          </Typography>
        }
        action={
          <Button
            variant="contained"
            onClick={() => router.push("/blog/add-blog")}
            startIcon={<PersonAdd />}
            sx={{ borderRadius: "20px", backgroundColor: "blue" }}
          >
            New Blog
          </Button>
        }
      />
      <CardContent>
        <TextField
          fullWidth
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{ startAdornment: <Search /> }}
          sx={{ mb: 3 }}
        />
        {loading && <LinearProgress sx={{ mb: 2 }} />}

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ width: "200px", fontWeight: 600, textAlign: "center" }}
                >
                  Blog Title
                </TableCell>
                <TableCell
                  sx={{ width: "200px", fontWeight: 600, textAlign: "center" }}
                >
                  Category
                </TableCell>
                <TableCell
                  sx={{ width: "200px", fontWeight: 600, textAlign: "center" }}
                >
                  Blog Type
                </TableCell>
                <TableCell
                  sx={{ width: "200px", fontWeight: 600, textAlign: "center" }}
                >
                  Blog Date
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ width: "200px", textAlign: "center" }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <ConfirmationModal
        open={deleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        title="Delete Blog"
        message="Are you sure you want to delete this blog? This action cannot be undone."
        confirmButtonText="Delete"
        cancelButtonText="Cancel"
      />
              {isLoadingBlog && myBlogData?.length === 0
                ? [...Array(10)].map((_, index) => (
                    <StyledTableRow key={index}>
                      <TableCell>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <Skeleton variant="circular" width={36} height={36} />
                          <Skeleton variant="text" width={100} height={20} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Skeleton variant="text" width={150} height={20} />
                      </TableCell>
                      <TableCell>
                        <Skeleton
                          variant="rectangular"
                          width={80}
                          height={24}
                        />
                      </TableCell>
                      <TableCell>
                        <Skeleton variant="text" width={100} height={20} />
                      </TableCell>
                      <TableCell align="right">
                        <div className="flex items-center justify-end gap-2">
                          <Skeleton variant="circular" width={32} height={32} />
                          <Skeleton variant="circular" width={32} height={32} />
                        </div>
                      </TableCell>
                    </StyledTableRow>
                  ))
                : paginatedBlogs.map((blog) => (
                    <StyledTableRow key={blog._id}>
                      <TableCell>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <Avatar
                            src={blog?.imageBase64}
                            sx={{ width: 36, height: 36 }}
                          >
                            {/* {blog.name.charAt(0)} */}
                          </Avatar>
                          <Typography sx={{ textAlign: "center" }}>
                            {blog.title}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {blog.category}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <Chip label={blog.blogType} variant="outlined" />
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="Edit">
                          <IconButton onClick={() => handleEdit(blog)}>
                            <Edit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton onClick={() => handleDelete(blog._id)}>
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </StyledTableRow>
                  ))}
            </TableBody>
          </Table>
          {myBlogData.length === 0 && (
            <div className="text-center text-[30px]">No Blog Found</div>
          )}
        </TableContainer>

        <Pagination
          count={Math.ceil(filteredBlogs?.length / rowsPerPage) || 1}
          page={page}
          onChange={handlePageChange}
          sx={{ mt: 3, display: "flex", justifyContent: "center" }}
        />
      </CardContent>
    </Card>
  );
}
