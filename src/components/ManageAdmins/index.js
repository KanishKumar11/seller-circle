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
import {
  getAllAdminAction,
  getDeleteAdminAction,
} from "@/store/slices/ManageAdminSlice";
import { useSearchParams } from "next/navigation";
import { useSnackbar } from "notistack";
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export default function AdminTable({ onEdit, onRemove, loading = false }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const dispatch = useDispatch();
  const { TotalAdminData, isLoadingAdmin } = useSelector(
    (state) => state.adminData
  );

  useEffect(() => {
    dispatch(getAllAdminAction())
      .unwrap()
      .then((data) => {
     
      })
      .catch((error) => {
      
      });
  }, []);
  const filteredAdmins = [...(TotalAdminData || [])] // Create a shallow copy to avoid mutation
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by latest first
    .filter(
      (admin) =>
        admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        admin.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedAdmins = filteredAdmins?.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleEdit = (admin) => {
    const params = new URLSearchParams(window.location.search);
    params.set("editAdminId", admin._id);
    params.delete("deleteAdminId");
    router.push(`/admin/add-admin?${params.toString()}`, { scroll: false });
  };

  const handleDelete = (adminId) => {
    const params = new URLSearchParams(window.location.search);
    params.set("deleteAdminId", adminId);
    params.delete("editAdminId");
    router.push(`?${params.toString()}`, { scroll: false });
    dispatch(getDeleteAdminAction(adminId))
      .unwrap()
      .then((res) => {
       
        enqueueSnackbar("Admin delete sucessfuly", { variant: "success" });
        params.delete("deleteAdminId");
        // dispatch(getAllAdminAction());
      })
      .catch((error) => {
        enqueueSnackbar(error, { variant: "error" });
      });
  };
  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h6" fontWeight={600}>
            Admin Management
          </Typography>
        }
        action={
          <Button
            variant="contained"
            onClick={() => router.push("/admin/add-admin")}
            startIcon={<PersonAdd />}
            sx={{ borderRadius: "20px", backgroundColor: "blue" }}
          >
            New Admin
          </Button>
        }
      />
      <CardContent>
        <TextField
          fullWidth
          placeholder="Search admins..."
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
                  User
                </TableCell>
                <TableCell
                  sx={{ width: "200px", fontWeight: 600, textAlign: "center" }}
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{ width: "200px", fontWeight: 600, textAlign: "center" }}
                >
                  Role
                </TableCell>
                <TableCell
                  sx={{ width: "200px", fontWeight: 600, textAlign: "center" }}
                >
                  Joined
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
              {isLoadingAdmin && TotalAdminData?.length === 0
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
                : paginatedAdmins.map((admin) => (
                    <StyledTableRow key={admin._id}>
                      <TableCell>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <Avatar
                            src={admin?.imageBase64}
                            sx={{ width: 36, height: 36 }}
                          >
                            {admin.name.charAt(0)}
                          </Avatar>
                          <Typography sx={{ textAlign: "center" }}>
                            {admin.name}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {admin.email}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <Chip label={admin.authType} variant="outlined" />
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {new Date(admin.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="Edit">
                          <IconButton onClick={() => handleEdit(admin)}>
                            <Edit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton onClick={() => handleDelete(admin._id)}>
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </StyledTableRow>
                  ))}
            </TableBody>
          </Table>
          {TotalAdminData.length === 0 && (
            <div className="text-center text-[30px]">No Admin Found</div>
          )}
        </TableContainer>

        <Pagination
          count={Math.ceil(filteredAdmins?.length / rowsPerPage) || 1}
          page={page}
          onChange={handlePageChange}
          sx={{ mt: 3, display: "flex", justifyContent: "center" }}
        />
      </CardContent>
    </Card>
  );
}

// "use client";
// import {
//   Avatar,
//   Button,
//   Card,
//   CardContent,
//   CardHeader,
//   Chip,
//   IconButton,
//   LinearProgress,
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
//   Pagination,
//   Skeleton,
// } from "@mui/material";
// import { Edit, Delete, PersonAdd, Search } from "@mui/icons-material";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getAllAdminAction,
//   getDeleteAdminAction,
// } from "@/store/slices/ManageAdminSlice";
// import { useSnackbar } from "notistack";

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:hover": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   borderBottom: `1px solid ${theme.palette.divider}`,
// }));

// export default function AdminTable({ onEdit, onRemove, loading = false }) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [page, setPage] = useState(1);
//   const rowsPerPage = 10;
//   const { enqueueSnackbar } = useSnackbar();
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { TotalAdminData, isLoadingAdmin } = useSelector(
//     (state) => state.adminData
//   );

//   useEffect(() => {
//     dispatch(getAllAdminAction());
//   }, [dispatch]);

//   const filteredAdmins = [...(TotalAdminData || [])]
//     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//     .filter(
//       (admin) =>
//         admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         admin.email.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//   const handlePageChange = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleEdit = (admin) => {
//     const params = new URLSearchParams(window.location.search);
//     params.set("editAdminId", admin._id);
//     params.delete("deleteAdminId");
//     router.push(`/admin/add-admin?${params.toString()}`, { scroll: false });
//   };

//   const handleDelete = (adminId) => {
//     const params = new URLSearchParams(window.location.search);
//     dispatch(getDeleteAdminAction(adminId))
//       .unwrap()
//       .then(() => {
//         enqueueSnackbar("Admin deleted successfully", { variant: "success" });
//         dispatch(getAllAdminAction());
//       })
//       .catch((error) => {
//         enqueueSnackbar(error, { variant: "error" });
//       });
//   };

//   return (
//     <Card>
//       <CardHeader
//         title={
//           <Typography variant="h6" fontWeight={600}>
//             Admin Management
//           </Typography>
//         }
//         action={
//           <Button
//             variant="contained"
//             onClick={() => router.push("/admin/add-admin")}
//             startIcon={<PersonAdd />}
//             sx={{ borderRadius: "20px", backgroundColor: "black" }}
//           >
//             New Admin
//           </Button>
//         }
//       />
//       <CardContent>
//         <TextField
//           fullWidth
//           placeholder="Search admins..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           InputProps={{ startAdornment: <Search /> }}
//           sx={{ mb: 3 }}
//         />
//         {loading && <LinearProgress sx={{ mb: 2 }} />}

//         {isLoadingAdmin && TotalAdminData?.length === 0 ? (
//           [...Array(10)].map((_, index) => (
//             <Skeleton key={index} variant="text" width={150} height={20} />
//           ))
//         ) : !isLoadingAdmin && TotalAdminData?.length === 0 ? (
//           <Typography textAlign="center">No data found</Typography>
//         ) : (
//           <TableContainer>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell sx={{ fontWeight: 600, textAlign: "center" }}>
//                     User
//                   </TableCell>
//                   <TableCell sx={{ fontWeight: 600, textAlign: "center" }}>
//                     Email
//                   </TableCell>
//                   <TableCell sx={{ fontWeight: 600, textAlign: "center" }}>
//                     Role
//                   </TableCell>
//                   <TableCell sx={{ fontWeight: 600, textAlign: "center" }}>
//                     Joined
//                   </TableCell>
//                   <TableCell align="right" sx={{ textAlign: "center" }}>
//                     Actions
//                   </TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredAdmins
//                   .slice((page - 1) * rowsPerPage, page * rowsPerPage)
//                   .map((admin) => (
//                     <StyledTableRow key={admin._id}>
//                       <TableCell>
//                         <Avatar src={admin.imageUrl} />
//                         {admin.name}
//                       </TableCell>
//                       <TableCell sx={{ textAlign: "center" }}>
//                         {admin.email}
//                       </TableCell>
//                       <TableCell sx={{ textAlign: "center" }}>
//                         <Chip label={admin.authType} variant="outlined" />
//                       </TableCell>
//                       <TableCell sx={{ textAlign: "center" }}>
//                         {new Date(admin.createdAt).toLocaleDateString()}
//                       </TableCell>
//                       <TableCell align="center">
//                         <Tooltip title="Edit">
//                           <IconButton onClick={() => handleEdit(admin)}>
//                             <Edit />
//                           </IconButton>
//                         </Tooltip>
//                         <Tooltip title="Delete">
//                           <IconButton onClick={() => handleDelete(admin._id)}>
//                             <Delete />
//                           </IconButton>
//                         </Tooltip>
//                       </TableCell>
//                     </StyledTableRow>
//                   ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         )}

//         <Pagination
//           count={Math.ceil(filteredAdmins.length / rowsPerPage) || 1}
//           page={page}
//           onChange={handlePageChange}
//           sx={{ mt: 3, display: "flex", justifyContent: "center" }}
//         />
//       </CardContent>
//     </Card>
//   );
// }
