/* eslint-disable react/prop-types */
"use client";
import { useForm, Controller } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { bookSchema } from "../../schema/bookSchema.js";
import { addbook, editbook } from "../../slices/bookSlice.jsx";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useEffect } from "react";
const FormAddBook = ({ setToggle, update, setUpdateValue }) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(bookSchema),
    mode: "onChange",
    defaultValues: {
      Title: "",
      Author: "",
      Publication_Year: "",
      Genre: "",
      image: "",
    },
  });
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  // handel register function

  // add book
  function handelAddBook(data, event) {
    let action = event.nativeEvent.submitter.innerText;
    const newData = {
      ...data,
      image:
        data.image.length > 0
          ? data.image
          : "https://imgs.search.brave.com/B-sPpTsz6R_fPqPwuPdFUEViKmQQJ40JhkjT4V5NMgY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY3/MzM2MTUyL3Bob3Rv/L2Jvb2staW4tZHVt/bXktZmFjZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Y1ZL/VlpJRUFoNUlHYUdu/UHM5Q3BqT3lwTzlO/S2loMEdsa3ZRbVFB/R1Rpcz0",
    };

    if (action === "update") {
      handelUpadate();
    } else {
      dispatch(addbook(newData))
        .unwrap()
        .then((data) => {
          if (data) {
            toast.success("Book added successfully");
            reset();
          }
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  }
  // --------------

  // udate/edit Book detail
  const handelUpadate = () => {
    const data = getValues();
    dispatch(editbook({ id: update.id, data }))
      .unwrap()
      .then((data) => {
        if (data) {
          toast.success("The book details have been successfully updated.");
          reset();
          setTimeout(() => {
            setToggle(true);
            setUpdateValue(null);
          }, 500);
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  // useffect for set the value in intput field
  useEffect(() => {
    if (update !== null) {
      setValue("Title", update?.Title ?? "");
      setValue("Author", update?.Author ?? "");
      setValue("Genre", update?.Genre ?? "");
      setValue("Publication_Year", update?.Publication_Year ?? "");
      setValue("image", update?.image ?? "");
    }
  }, [update, setValue]);

  //

  // aGo back to the manage book
  const handelBack = () => {
    if (update) {
      setUpdateValue(null);
      naviagte("/managebook");
      setToggle(true);
      reset();
    } else {
      setToggle(true);
      reset();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          p: "40px 0",
          minHeight: 640,
          width: "90%",
          backdropFilter: "blur(4px) saturate(200%)",
          WebkitBackdropFilter: "blur(4px) saturate(200%)",
          backgroundColor: "rgba(255, 255, 255, 0.24)",
          padding: "5px",
        }}
      >
        <Button
          onClick={handelBack}
          variant="contained"
          sx={{
            backgroundColor: "black",
            width: "150px",
            padding: "10px",
            borderRadius: "5px",
            textAlign: "center",
            marginBottom: "1.2rem",
          }}
        >
          <KeyboardBackspaceIcon
            sx={{ marginRight: "5px", fontSize: "30px" }}
          />
          Back
        </Button>
        {/* form */}
        <Box
          className=" min-h-[500px]  "
          sx={{
            width: "100%",
            minHeight: "570px",
            borderRadius: "5px",
            // border: "1px solid rgba(209, 213, 219, 0.3)",
            padding: "25px",
            border: "2px solid black",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "30px",
              textAlign: "start",
              marginBottom: "20px",
            }}
          >
            {update !== null ? "Update Book Details" : "Add New Book"}
          </Typography>
          <Box className="p- w-[100%] ">
            <form
              className="flex flex-col h-[450px] justify-between  "
              onSubmit={handleSubmit(handelAddBook)}
            >
              {/* Title */}
              <Box>
                <Controller
                  name="Title"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="outlined-basic"
                      label="Title"
                      variant="outlined"
                      error={!!errors.Title} // Show error if field has an error
                      helperText={errors.Title ? errors.Title.message : ""}
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused input": {
                            // color: "#FF4F5A",
                            color: "black", // Text color when focused
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "black", // Label color when focused
                        },
                      }}
                      {...field}
                    />
                  )}
                />
              </Box>
              {/* ---- */}

              {/* Author */}
              <Box>
                <Controller
                  name="Author"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="outlined-basic"
                      label="Author"
                      variant="outlined"
                      error={!!errors.Author}
                      helperText={errors.Author?.message}
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused input": {
                            // color: "#FF4F5A",
                            color: "black", // Text color when focused
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "black", // Label color when focused
                        },
                      }}
                      {...field}
                    />
                  )}
                />
              </Box>
              {/* ---- */}

              {/* Publication_Year */}
              <Box>
                <Controller
                  name="Publication_Year"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="outlined-basic"
                      label="Publication_Year"
                      variant="outlined"
                      error={!!errors.Publication_Year}
                      helperText={errors.Publication_Year?.message}
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused input": {
                            // color: "#FF4F5A",
                            color: "black", // Text color when focused
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "black", // Label color when focused
                        },
                      }}
                      {...field}
                    />
                  )}
                />
              </Box>
              {/* ---- */}

              {/* Genre */}
              <Box>
                <Controller
                  name="Genre"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="outlined-basic"
                      label="Genre"
                      variant="outlined"
                      error={!!errors.Genre}
                      helperText={errors.Genre?.message}
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused input": {
                            // color: "#FF4F5A",
                            color: "black", // Text color when focused
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "black", // Label color when focused
                        },
                      }}
                      {...field}
                    />
                  )}
                />
              </Box>
              {/* ---- */}
              {/* image url */}
              <Box>
                <Controller
                  name="image"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="outlined-basic"
                      label="Image url"
                      variant="outlined"
                      error={!!errors.image}
                      helperText={errors.image?.message}
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused input": {
                            // color: "#FF4F5A",
                            color: "black", // Text color when focused
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "black", // Label color when focused
                        },
                      }}
                      {...field}
                    />
                  )}
                />
              </Box>
              {/* ---- */}
              <Button
                type="submit"
                variant={"contained"}
                // disabled={isLoading}
                sx={{
                  textTransform: "none",
                  height: "50px",
                  // backgroundColor: isLoading ? "white" : "#FF4F5A",
                  backgroundColor: "black",
                  fontSize: "16px",
                  fontWeight: "400",
                  marginTop: "10px",
                  borderRadius: "5px",
                }}
              >
                {update ? "update" : "Submit"}
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default FormAddBook;

// @testing
