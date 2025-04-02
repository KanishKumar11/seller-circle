// "use client";

// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import {
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   CardHeader,
//   IconButton,
//   Avatar,
//   Grid,
//   Typography,
//   InputAdornment,
//   CircularProgress,
//   Box,
//   Skeleton,
// } from "@mui/material";
// import {
//   Visibility,
//   VisibilityOff,
//   CloudUpload,
//   Info,
//   Person,
//   Email,
//   Lock,
// } from "@mui/icons-material";
// import { useSnackbar } from "notistack";
// import {
//   getAllEditorAction,
//   getEditorRegisterAction,
//   UpdateEditorAction,
// } from "@/store/slices/EditorSlice";
// import { useRouter, useSearchParams } from "next/navigation";

// export default function AddUserForm({ onSubmit }) {
//   const [imagePreview, setImagePreview] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [filePath, setFilePath] = useState(null);
//   const { enqueueSnackbar } = useSnackbar();
//   const searchParams = useSearchParams();
//   const editId = searchParams.get("editId");
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     formState: { isSubmitting },
//     reset,
//     setValue,
//   } = useForm();
//   useEffect(() => {
//     setLoading(true);
//     if (editId) {
//       dispatch(getAllEditorAction())
//         .unwrap()
//         .then((data) => {
//           const editor = data.find((editor) => editor._id === editId);
//           if (editor) {
//             setValue("name", editor.name);
//             setValue("email", editor.email);
//             setValue("password", editor.password);

//             const base64String = `data:${editor.contentType};base64,${editor.imageBase64}`;
//             setImagePreview(base64String);
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching editor data:", error);
//           enqueueSnackbar("Failed to load editor data", { variant: "error" });
//         })
//         .finally(() => setLoading(false));
//     } else {
//       reset();
//       setImagePreview(null);
//       setFilePath(null);
//       setLoading(false);
//     }
//   }, [dispatch, editId, setValue, reset, enqueueSnackbar]);
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFilePath(file);
//       const reader = new FileReader();
//       reader.onload = () => setImagePreview(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   const submitForm = async (data) => {
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("email", data.email);
//     formData.append("password", data.password);
//     formData.append("file", filePath); // React Hook Form stores files as an array

//     if (formData && !editId) {
//       dispatch(getEditorRegisterAction(formData))
//         .unwrap()
//         .then((data) => {
//           enqueueSnackbar("Editor register sucessfuly", { variant: "success" });
//           setImagePreview(null);
//           console.log(data, "editor response");
//           reset();
//           dispatch(getAllEditorAction());
//         })
//         .catch((error) => {
//           console.log(error, "aerror ");
//           enqueueSnackbar(error, { variant: "error" });
//         });
//     } else if (formData && editId) {
//       dispatch(UpdateEditorAction({ editId, formData }))
//         .unwrap()
//         .then(() => {
//           dispatch(getAllEditorAction());
//           router.push("/admin/manage-editors");
//           enqueueSnackbar("Editor update sucessfuly", { variant: "success" });
//         })
//         .catch((error) => {
//           enqueueSnackbar(error, { variant: "error" });
//         });
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Grid container className="h-full">
//         <Grid item xs={12} md={5} className="bg-gray-900 p-8 text-white">
//           <div className="h-full flex flex-col justify-center max-w-md mx-auto">
//             <Typography variant="h4" className="font-bold mb-6">
//               Editor Management
//             </Typography>
//           </div>
//         </Grid>
//         <Grid item xs={12} md={7} className="p-8">
//           <Card className="w-full h-full shadow-xl rounded-lg">
//             <CardContent className="p-6">
//               <CardHeader
//                 title={editId ? "Edit Editor" : "Create New Editor"}
//                 titleTypographyProps={{
//                   variant: "h4",
//                   className: "font-bold text-gray-800",
//                 }}
//                 subheader={
//                   editId
//                     ? "Update administrator details"
//                     : "Fill in the administrator details"
//                 }
//                 subheaderTypographyProps={{ className: "text-gray-500" }}
//                 className="text-center mb-8"
//               />
//               {loading ? (
//                 <Skeleton variant="rectangular" width="100%" height={400} />
//               ) : (
//                 <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
//                   <div className="flex flex-col items-center gap-4">
//                     <input
//                       id="image"
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       onChange={handleImageChange}
//                     />
//                     <label
//                       htmlFor="image"
//                       className="cursor-pointer group relative"
//                     >
//                       <Avatar
//                         src={imagePreview}
//                         sx={{
//                           width: 120,
//                           height: 120,
//                           border: "2px dashed #e0e0e0",
//                         }}
//                       >
//                         {!imagePreview && (
//                           <CloudUpload
//                             sx={{ fontSize: 40, color: "#9e9e9e" }}
//                           />
//                         )}
//                       </Avatar>
//                     </label>
//                   </div>
//                   <TextField
//                     fullWidth
//                     label="Full Name"
//                     variant="outlined"
//                     {...register("name", { required: true })}
//                   />
//                   <TextField
//                     fullWidth
//                     label="Email"
//                     variant="outlined"
//                     {...register("email", { required: true })}
//                   />
//                   <TextField
//                     fullWidth
//                     label="Password"
//                     type="password"
//                     variant="outlined"
//                     {...register("password")}
//                   />
//                   <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     size="large"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? (
//                       <CircularProgress size={24} />
//                     ) : editId ? (
//                       "Update Admin"
//                     ) : (
//                       "Create Admin"
//                     )}
//                   </Button>
//                 </form>
//               )}
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  Button,
  TextField,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Avatar,
  Grid,
  Typography,
  InputAdornment,
  CircularProgress,
  Box,
  Skeleton,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  CloudUpload,
  Info,
  Person,
  Email,
  Lock,
} from "@mui/icons-material";
import { useSnackbar } from "notistack";
import {
  getAllEditorAction,
  getEditorRegisterAction,
  UpdateEditorAction,
} from "@/store/slices/EditorSlice";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import registerImage from "../../../public/images/register.jpg"
export default function AddUserForm({ onSubmit }) {
  const [imagePreview, setImagePreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filePath, setFilePath] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false); // Track image upload status
  const { enqueueSnackbar } = useSnackbar();
  const searchParams = useSearchParams();
  const editId = searchParams.get("editId");
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onChange", // Validate on change for real-time feedback
  });

  useEffect(() => {
    setLoading(true);
    if (editId) {
      dispatch(getAllEditorAction())
        .unwrap()
        .then((data) => {
          const editor = data.find((editor) => editor._id === editId);
          if (editor) {
            setValue("name", editor.name);
            setValue("email", editor.email);
            setValue("password", editor.password);
            const base64String = `data:${editor.contentType};base64,${editor.imageBase64}`;
            setImagePreview(base64String);
            setIsImageUploaded(true); // Image exists for edit mode
          }
        })
        .catch((error) => {
          console.error("Error fetching editor data:", error);
          enqueueSnackbar("Failed to load editor data", { variant: "error" });
        })
        .finally(() => setLoading(false));
    } else {
      reset();
      setImagePreview(null);
      setFilePath(null);
      setIsImageUploaded(false); // Reset image upload status
      setLoading(false);
    }
  }, [dispatch, editId, setValue, reset, enqueueSnackbar]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFilePath(file);
      setIsImageUploaded(true); // Mark image as uploaded
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setIsImageUploaded(false); // Reset if no file is selected
      setImagePreview(null);
      setFilePath(null);
    }
  };

  const submitForm = async (data) => {
    // Check if image is uploaded
    if (!isImageUploaded) {
      enqueueSnackbar("Please upload a profile image", { variant: "error" });
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("file", filePath);

    try {
      if (!editId) {
        // Register new editor
        await dispatch(getEditorRegisterAction(formData))
          .unwrap()
          .then((data) => {
            enqueueSnackbar("Editor registered successfully", {
              variant: "success",
            });
            setImagePreview(null);
            setIsImageUploaded(false);
            reset();
            dispatch(getAllEditorAction());
          });
      } else {
        // Update existing editor
        await dispatch(UpdateEditorAction({ editId, formData }))
          .unwrap()
          .then(() => {
            dispatch(getAllEditorAction());
            router.push("/admin/manage-editors");
            enqueueSnackbar("Editor updated successfully", {
              variant: "success",
            });
          });
      }
    } catch (error) {
      // Custom error handling for backend errors
      let errorMessage = "Please upload the image";
      if (error.message) {
        if (error.message.includes("duplicate key error")) {
          errorMessage = "Email already exists. Please use a different email.";
        } else if (error.message.includes("validation failed")) {
          errorMessage = "Invalid data provided. Please check your input.";
        } else {
          errorMessage = error.message;
        }
      }
      enqueueSnackbar(errorMessage, { variant: "error" });
      console.log(error, "error");
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Grid container className="h-full">
        <Grid item xs={12} md={5} className="bg-gray-900 h-[100vh]">
          <div className="h-full flex flex-col justify-center ">
           <Image alt="image" className="w-[100%] h-[100%] object-cover" src={registerImage}/>
          </div>
        </Grid>
        <Grid item xs={12} md={7} className="p-8">
          <Card className="w-full h-full shadow-xl rounded-lg">
            <CardContent className="p-6">
              <CardHeader
                title={editId ? "Edit Editor" : "Create New Editor"}
                titleTypographyProps={{
                  variant: "h4",
                  className: "font-bold text-gray-800",
                }}
                subheader={
                  editId
                    ? "Update editor details"
                    : "Fill in the editor details"
                }
                subheaderTypographyProps={{ className: "text-gray-500" }}
                className="text-center mb-8"
              />
              {loading ? (
                <Skeleton variant="rectangular" width="100%" height={400} />
              ) : (
                <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
                  <div className="flex flex-col items-center gap-4">
                    <input
                      id="image"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                    <label
                      htmlFor="image"
                      className="cursor-pointer group relative"
                    >
                      <Avatar
                        src={imagePreview}
                        sx={{
                          width: 120,
                          height: 120,
                          border: "2px dashed #e0e0e0",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            borderColor: "#3b82f6",
                            transform: "scale(1.02)",
                          },
                          backgroundColor: imagePreview
                            ? "transparent"
                            : "#f8fafc",
                        }}
                      >
                        {!imagePreview && (
                          <CloudUpload
                            sx={{
                              fontSize: 40,
                              color: "#9e9e9e",
                              transition: "color 0.2s ease",
                              ".group:hover &": {
                                color: "#3b82f6",
                              },
                            }}
                          />
                        )}
                      </Avatar>
                      <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-blue-600 text-white p-1.5 rounded-full shadow-lg">
                          <CloudUpload sx={{ fontSize: 16 }} />
                        </div>
                      </div>
                    </label>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#64748b",
                        fontSize: "0.875rem",
                      }}
                    >
                      {imagePreview
                        ? "Click to change image"
                        : "Upload profile picture"}
                    </Typography>
                  </div>

                  <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    {...register("name", {
                      required: "Full Name is required",
                    })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person sx={{ color: "#64748b" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "0.5rem",
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#3b82f6",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#3b82f6",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#3b82f6",
                      },
                    }}
                    onBlur={() => {
                      if (errors.name) {
                        enqueueSnackbar(errors.name.message, {
                          variant: "error",
                        });
                      }
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email sx={{ color: "#64748b" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "0.5rem",
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#3b82f6",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#3b82f6",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#3b82f6",
                      },
                    }}
                    onBlur={() => {
                      if (errors.email) {
                        enqueueSnackbar(errors.email.message, {
                          variant: "error",
                        });
                      }
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock sx={{ color: "#64748b" }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "0.5rem",
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#3b82f6",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#3b82f6",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#3b82f6",
                      },
                    }}
                    onBlur={() => {
                      if (errors.password) {
                        enqueueSnackbar(errors.password.message, {
                          variant: "error",
                        });
                      }
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    disabled={
                      isSubmitting ||
                      Object.keys(errors).length > 0 ||
                      !isImageUploaded
                    }
                    sx={{
                      backgroundColor: "#3b82f6",
                      borderRadius: "0.5rem",
                      padding: "0.75rem 1.5rem",
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: "1rem",
                      boxShadow:
                        "0 4px 6px -1px rgba(59, 130, 246, 0.2), 0 2px 4px -1px rgba(59, 130, 246, 0.1)",
                      "&:hover": {
                        backgroundColor: "#2563eb",
                      },
                      "&:disabled": {
                        backgroundColor: "#93c5fd",
                      },
                    }}
                  >
                    {isSubmitting ? (
                      <CircularProgress size={24} sx={{ color: "white" }} />
                    ) : editId ? (
                      "Update Editor"
                    ) : (
                      "Create Editor"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
