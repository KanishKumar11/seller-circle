// src/axiosInstance.js

import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: "/api", // Replace with your API's base URL
});

// Set up the request interceptor to add the Bearer token
axiosInstance.interceptors.request.use(
  (config) => {
    const authData = localStorage.getItem("authData"); // Retrieve the Bearer token from localStorage (or wherever you store it)
    if (token) {
      config.headers["Authorization"] = `Bearer ${authData.token}`; // Add the Bearer token to the Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
// import { notifyError } from "@/utils/Notistack/utils";
// import Axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

// const axiosInstance = Axios.create({
//   baseURL: "/api", // Replace with your API's base URL
// });

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     const authData = getLocalStorage("authData") || "";
//     config.headers.Authorization = `Bearer ${authData.token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // axiosInstance.interceptors.response.use(
// //   (response) => {
// //     return response;
// //   },
// //   (error) => {
// //     if (error.response && [401].includes(error.response.status)) {
// //       clearLocalStorage();
// //       // to sort out the issue in the login page, when user enter wrong credentials
// //       const [requestUrl] = (error?.config?.url || "")?.split("?");
// //       if (
// //         window.location.pathname !== "/adminlogin" &&
// //         requestUrl !== "/adminlogin"
// //       ) {
// //         window.location.href = "/adminlogin";
// //         notifyError(error.response.data.message);
// //       }
// //     }
// //     return Promise.reject(error);
// //   }
// // );

// // export default axiosInstance;
