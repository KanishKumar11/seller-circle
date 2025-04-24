// "use client";
// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import {
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   CardHeader,
//   Avatar,
//   Grid,
//   Typography,
//   CircularProgress,
//   Skeleton,
// } from "@mui/material";
// import { CloudUpload } from "@mui/icons-material";
// import { useDispatch, useSelector } from "react-redux";
// import { AdminRegisterAction } from "@/store/slices/AuthSliceAdmin";
// import { useSnackbar } from "notistack";
// import {
//   getAllAdminAction,
//   UpdateAdminAction,
// } from "@/store/slices/ManageAdminSlice";
// import { useRouter, useSearchParams } from "next/navigation";

// export default function AdminRegisterForm() {
//   const [imagePreview, setImagePreview] = useState(null);
//   const [filePath, setFilePath] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const { enqueueSnackbar } = useSnackbar();
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const editAdminId = searchParams.get("editAdminId");

//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     formState: { isSubmitting },
//   } = useForm();
//   const { TotalAdminData } = useSelector((state) => state.adminData);

//   useEffect(() => {
//     setLoading(true);
//     if (editAdminId) {
//       dispatch(getAllAdminAction())
//         .unwrap()
//         .then((data) => {
//           const admin = data.find((admin) => admin._id === editAdminId);
//           if (admin) {
//             setValue("name", admin.name);
//             setValue("email", admin.email);
//             setValue("password", admin.password);
//             setImagePreview(admin.profileImage);
//           }
//         })
//         .finally(() => setLoading(false));
//     } else {
//       reset(); // Reset form when switching to "Add Admin"
//       setImagePreview(null); // Clear image preview
//       setFilePath(null);
//       setLoading(false);
//     }
//   }, [dispatch, editAdminId, setValue, reset]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setFilePath(file);
//     if (file) {
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

//     if (formData && !editAdminId) {
//       dispatch(AdminRegisterAction(formData))
//         .unwrap()
//         .then((data) => {
//           enqueueSnackbar("Admin register sucessfuly", { variant: "success" });
//           setImagePreview(null);
//           console.log(data, "editor response");
//           reset();
//           dispatch(getAllAdminAction());
//         })
//         .catch((error) => {
//           console.log(error, "aerror ");
//           enqueueSnackbar(error, { variant: "error" });
//         });
//     } else if (formData && editAdminId) {
//       dispatch(UpdateAdminAction({ editAdminId, formData }))
//         .unwrap()
//         .then((res) => {
//           console.log(res, "resposne");
//           dispatch(getAllAdminAction());
//           router.push("/admin/manageadmins");
//           enqueueSnackbar("Admin update sucessfuly", { variant: "success" });
//         })
//         .catch((error) => {
//           enqueueSnackbar(error, "gggg", { variant: "error" });
//           console.log(error, "66666");
//         });
//     }
//   };

//   return (
//     <div className="min-h-screen  from-gray-50 to-gray-100 flex items-center justify-center p-4">
//       <Grid
//         container
//         className="max-w-6xl mx-auto overflow-hidden rounded-xl shadow-2xl"
//       >
//         <Grid
//           item
//           xs={12}
//           md={5}
//           className="  from-blue-600 to-blue-800 p-8 flex items-center"
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             color: "white",
//             backgroundImage:
//               "linear-gradient(to bottom right, #2563eb, #1e40af)",
//           }}
//         >
//           <div className="py-8">
//             <Typography
//               variant="h4"
//               sx={{
//                 fontWeight: "bold",
//                 marginBottom: "1.5rem",
//                 color: "white",
//               }}
//             >
//               Admin Management
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 color: "rgba(255, 255, 255, 0.8)",
//                 marginBottom: "2rem",
//               }}
//             >
//               Securely manage your administrator accounts with full control over
//               permissions and access.
//             </Typography>
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <div className="w-2 h-2 rounded-full bg-blue-300 mr-2"></div>
//                 <Typography
//                   variant="body2"
//                   sx={{ color: "rgba(255, 255, 255, 0.8)" }}
//                 >
//                   Create and manage admin accounts
//                 </Typography>
//               </div>
//             </div>
//           </div>
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           md={7}
//           sx={{
//             backgroundColor: "white",
//             padding: { xs: "1.5rem", md: "2.5rem" },
//           }}
//         >
//           <Card
//             elevation={0}
//             sx={{
//               boxShadow: "none",
//               height: "100%",
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <CardHeader
//               title={editAdminId ? "Edit Admin" : "Create New Admin"}
//               subheader={
//                 editAdminId
//                   ? "Update administrator details"
//                   : "Fill in the administrator details"
//               }
//               sx={{
//                 "& .MuiCardHeader-title": {
//                   fontSize: "1.75rem",
//                   fontWeight: "bold",
//                   color: "#1e293b",
//                   marginBottom: "0.5rem",
//                 },
//                 "& .MuiCardHeader-subheader": {
//                   color: "#64748b",
//                   fontSize: "1rem",
//                 },
//                 padding: "0 0 1.5rem 0",
//               }}
//             />

//             <CardContent sx={{ padding: 0, flexGrow: 1 }}>
//               {loading ? (
//                 <div className="space-y-6">
//                   <Skeleton
//                     variant="circular"
//                     width={120}
//                     height={120}
//                     sx={{ margin: "0 auto" }}
//                   />
//                   <Skeleton variant="rectangular" height={56} />
//                   <Skeleton variant="rectangular" height={56} />
//                   <Skeleton variant="rectangular" height={56} />
//                   <Skeleton variant="rectangular" height={56} />
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
//                   <div className="flex flex-col items-center gap-4 mb-6">
//                     <input
//                       id="image"
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       onChange={handleImageChange}
//                     />
//                     <label
//                       htmlFor="image"
//                       className="cursor-pointer relative group"
//                     >
//                       <Avatar
//                         src={imagePreview}
//                         sx={{
//                           width: 120,
//                           height: 120,
//                           border: "2px dashed #e2e8f0",
//                           transition: "all 0.2s ease",
//                           "&:hover": {
//                             borderColor: "#3b82f6",
//                             transform: "scale(1.02)",
//                           },
//                           backgroundColor: imagePreview
//                             ? "transparent"
//                             : "#f8fafc",
//                         }}
//                       >
//                         {!imagePreview && (
//                           <CloudUpload
//                             sx={{
//                               fontSize: 40,
//                               color: "#94a3b8",
//                               transition: "color 0.2s ease",
//                               ".group:hover &": {
//                                 color: "#3b82f6",
//                               },
//                             }}
//                           />
//                         )}
//                       </Avatar>
//                       <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
//                         <div className="bg-blue-600 text-white p-1.5 rounded-full shadow-lg">
//                           <CloudUpload sx={{ fontSize: 16 }} />
//                         </div>
//                       </div>
//                     </label>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         color: "#64748b",
//                         fontSize: "0.875rem",
//                       }}
//                     >
//                       {imagePreview
//                         ? "Click to change image"
//                         : "Upload profile picture"}
//                     </Typography>
//                   </div>

//                   <TextField
//                     fullWidth
//                     label="Full Name"
//                     variant="outlined"
//                     {...register("name", { required: true })}
//                     sx={{
//                       marginBottom: "1.5rem",
//                       "& .MuiOutlinedInput-root": {
//                         borderRadius: "0.5rem",
//                         "&:hover .MuiOutlinedInput-notchedOutline": {
//                           borderColor: "#3b82f6",
//                         },
//                         "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                           borderColor: "#3b82f6",
//                         },
//                       },
//                       "& .MuiInputLabel-root.Mui-focused": {
//                         color: "#3b82f6",
//                       },
//                     }}
//                   />

//                   <TextField
//                     fullWidth
//                     label="Email"
//                     variant="outlined"
//                     {...register("email", { required: true })}
//                     sx={{
//                       marginBottom: "1.5rem",
//                       "& .MuiOutlinedInput-root": {
//                         borderRadius: "0.5rem",
//                         "&:hover .MuiOutlinedInput-notchedOutline": {
//                           borderColor: "#3b82f6",
//                         },
//                         "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                           borderColor: "#3b82f6",
//                         },
//                       },
//                       "& .MuiInputLabel-root.Mui-focused": {
//                         color: "#3b82f6",
//                       },
//                     }}
//                   />

//                   <TextField
//                     fullWidth
//                     label="Password"
//                     type="password"
//                     variant="outlined"
//                     {...register("password")}
//                     sx={{
//                       marginBottom: "1.5rem",
//                       "& .MuiOutlinedInput-root": {
//                         borderRadius: "0.5rem",
//                         "&:hover .MuiOutlinedInput-notchedOutline": {
//                           borderColor: "#3b82f6",
//                         },
//                         "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                           borderColor: "#3b82f6",
//                         },
//                       },
//                       "& .MuiInputLabel-root.Mui-focused": {
//                         color: "#3b82f6",
//                       },
//                     }}
//                   />

//                   <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     size="large"
//                     disabled={isSubmitting}
//                     sx={{
//                       backgroundColor: "#3b82f6",
//                       borderRadius: "0.5rem",
//                       padding: "0.75rem 1.5rem",
//                       textTransform: "none",
//                       fontWeight: 600,
//                       fontSize: "1rem",
//                       boxShadow:
//                         "0 4px 6px -1px rgba(59, 130, 246, 0.2), 0 2px 4px -1px rgba(59, 130, 246, 0.1)",
//                       "&:hover": {
//                         backgroundColor: "#2563eb",
//                       },
//                       "&:disabled": {
//                         backgroundColor: "#93c5fd",
//                       },
//                     }}
//                   >
//                     {isSubmitting ? (
//                       <CircularProgress size={24} sx={{ color: "white" }} />
//                     ) : editAdminId ? (
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
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  TextField,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Grid,
  Typography,
  CircularProgress,
  Skeleton,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AdminRegisterAction } from "@/store/slices/AuthSliceAdmin";
import { useSnackbar } from "notistack";
import {
  getAllAdminAction,
  UpdateAdminAction,
} from "@/store/slices/ManageAdminSlice";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminRegisterForm() {
  const [imagePreview, setImagePreview] = useState(null);
  const [filePath, setFilePath] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isImageUploaded, setIsImageUploaded] = useState(false); // Track image upload status
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const editAdminId = searchParams.get("editAdminId");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onChange", // Validate on change for real-time feedback
  });

  const { TotalAdminData } = useSelector((state) => state.adminData);

  useEffect(() => {
    setLoading(true);
    if (editAdminId) {
      dispatch(getAllAdminAction())
        .unwrap()
        .then((data) => {
          const admin = data.find((admin) => admin._id === editAdminId);
          if (admin) {
            setValue("name", admin.name);
            setValue("email", admin.email);
            setValue("password", admin.password);
            setImagePreview(admin.profileImage);
            setIsImageUploaded(true); // Image exists for edit mode
          }
        })
        .finally(() => setLoading(false));
    } else {
      reset(); // Reset form when switching to "Add Admin"
      setImagePreview(null); // Clear image preview
      setFilePath(null);
      setIsImageUploaded(false); // Reset image upload status
      setLoading(false);
    }
  }, [dispatch, editAdminId, setValue, reset]);

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
      if (!editAdminId) {
        // Register new admin
        await dispatch(AdminRegisterAction(formData))
          .unwrap()
          .then((data) => {
            enqueueSnackbar("Admin registered successfully", {
              variant: "success",
            });
            setImagePreview(null);
            setIsImageUploaded(false);
            reset();
            dispatch(getAllAdminAction());
          });
      } else {
        // Update existing admin
        await dispatch(UpdateAdminAction({ editAdminId, formData }))
          .unwrap()
          .then((res) => {
            enqueueSnackbar("Admin updated successfully", {
              variant: "success",
            });
            dispatch(getAllAdminAction());
            router.push("/admin/manageadmins");
          });
      }
    } catch (error) {
      // Custom error handling for backend errors
      let errorMessage = "Please upload image";
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
    }
  };

  return (
    <div className="min-h-screen from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Grid
        container
        className="max-w-6xl mx-auto overflow-hidden rounded-xl shadow-2xl"
      >
        <Grid
          item
          xs={12}
          md={5}
          className="from-blue-600 to-blue-800 p-8 flex items-center"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backgroundImage:
              "linear-gradient(to bottom right, #2563eb, #1e40af)",
          }}
        >
          <div className="py-8">
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: "1.5rem",
                color: "white",
              }}
            >
              Admin Management
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                marginBottom: "2rem",
              }}
            >
              Securely manage your administrator accounts with full control over
              permissions and access.
            </Typography>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-300 mr-2"></div>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  Create and manage admin accounts
                </Typography>
              </div>
            </div>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          md={7}
          sx={{
            backgroundColor: "white",
            padding: { xs: "1.5rem", md: "2.5rem" },
          }}
        >
          <Card
            elevation={0}
            sx={{
              boxShadow: "none",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardHeader
              title={editAdminId ? "Edit Admin" : "Create New Admin"}
              subheader={
                editAdminId
                  ? "Update administrator details"
                  : "Fill in the administrator details"
              }
              sx={{
                "& .MuiCardHeader-title": {
                  fontSize: "1.75rem",
                  fontWeight: "bold",
                  color: "#1e293b",
                  marginBottom: "0.5rem",
                },
                "& .MuiCardHeader-subheader": {
                  color: "#64748b",
                  fontSize: "1rem",
                },
                padding: "0 0 1.5rem 0",
              }}
            />

            <CardContent sx={{ padding: 0, flexGrow: 1 }}>
              {loading ? (
                <div className="space-y-6">
                  <Skeleton
                    variant="circular"
                    width={120}
                    height={120}
                    sx={{ margin: "0 auto" }}
                  />
                  <Skeleton variant="rectangular" height={56} />
                  <Skeleton variant="rectangular" height={56} />
                  <Skeleton variant="rectangular" height={56} />
                  <Skeleton variant="rectangular" height={56} />
                </div>
              ) : (
                <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
                  <div className="flex flex-col items-center gap-4 mb-6">
                    <input
                      id="image"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                    <label
                      htmlFor="image"
                      className="cursor-pointer relative group"
                    >
                      <Avatar
                        src={imagePreview}
                        sx={{
                          width: 120,
                          height: 120,
                          border: "2px dashed #e2e8f0",
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
                              color: "#94a3b8",
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
                    sx={{
                      marginBottom: "1.5rem",
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
                    sx={{
                      marginBottom: "1.5rem",
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
                    type="password"
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
                    sx={{
                      marginBottom: "1.5rem",
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
                    ) : editAdminId ? (
                      "Update Admin"
                    ) : (
                      "Create Admin"
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
