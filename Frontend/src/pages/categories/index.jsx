// import in project
import { Box, Button, Typography, useTheme, Chip } from "@mui/material";
import Header from "../../components/Header";
import { mockDataTeam } from "../../data/mockData";
import { tokens } from "../../theme";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SecurityIcon from "@mui/icons-material/Security";
import { fetchCategory } from '../../store/reducer/category'

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import TableUI from '../../components/Table/index'
import { Check, Close, Delete, Edit } from "@mui/icons-material";
import ModalSubCategory from "./subComponent";


const Categories = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const categories = useSelector(state => state.categoryReducer.categoryApi);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch])


    const columns = [
        { field: "index", headerName: "Số thứ tự", align: 'center', headerAlign: 'center', flex: 1 },
        { field: "name", headerName: "Tên loại", align: 'center', headerAlign: 'center', flex: 1 },
        { field: "code", headerName: "Code", align: 'center', headerAlign: 'center', flex: 1 },
        {
            field: "is_active",
            headerName: "Trạng thái",
            flex: 1,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <Chip 
                        icon={params.row.is_active ? <Check /> : <Close />}
                        size="medium" 
                        label={params.row.is_active ? 'Hoạt động' : 'Không hoạt động'} 
                        color={params.row.is_active ? 'success' : 'error'} 
                    />
                );
            },
        },
        {
            field: "createdAt",
            headerName: "Ngày tạo",
            flex: 1,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <Typography>
                        {
                            moment(params.row.createdAt).format('DD/MM/YYYY')
                        }
                    </Typography>
                );
            },
        },
        {
            field: "updatedAt",
            headerName: "Ngày cập nhật", flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => {
                return (
                    <Typography>
                        {
                            moment(params.row.updatedAt).format('DD/MM/YYYY')
                        }
                    </Typography>
                );
            },
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: "Hành động",
            width: 120,
            headerAlign: 'center',
            align: 'center',
            getActions: (params) => [
                <ModalSubCategory
                    data={params.row}
                    dispatch={dispatch}
                />
            ]
        }
    ];

    return (
        <Box m="10px">
            <Header title="Categories" subtitle="" />
            <Box
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <ModalSubCategory
                    dispatch={dispatch}
                    colors={colors}
                />
                <TableUI
                    rows={categories}
                    columns={columns}
                    dispatch={dispatch}
                />
            </Box>
        </Box>
    );
};

export default Categories;
