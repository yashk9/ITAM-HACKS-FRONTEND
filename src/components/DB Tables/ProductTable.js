import React, { useEffect, useState } from 'react'
import NavBar from '../Landing Pages/NavBar';

import {  Box ,  Grid, } from '@mui/material'
import { DataGrid, GridToolbar ,gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';

function ProductTable() {
    const[prodAtr,setProdAtr]=useState([])

    useEffect( ()=> {
        fetch("http://localhost:8080/productTable/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setProdAtr(result);
        })
    },[])

    const tableStyle={ marginTop:"10vh" }
    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'identifyingNumber', headerName: 'Identifying Number', width: 250 },
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'vendor', headerName: 'Vendor', width: 250 },
        { field: 'version', headerName: 'Version', width: 250 },
        { field: 'caption', headerName: 'Caption', width: 250 },
        { field: 'biosSeralNumber', headerName: 'Bios Serial Number', width: 250 },
    ]

    const rows = prodAtr.map( vals => (
          {id: vals.id , 
            identifyingNumber: vals.identifyingNumber,
            name: vals.name,
            vendor: vals.vendor,
            version: vals.version,
            caption: vals.caption,
            biosSeralNumber: vals.biosSeralNumber,
          }
      ))


      const headingStyle={ fontFamily:"Nunito" , fontWeight:"bold"}
    const boxStyle={backgroundColor:"whitesmoke" , marginTop:"7vh"}
    
    const ODD_OPACITY = 0.2;
    const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
      [`& .${gridClasses.row}.even`]: {
        backgroundColor: theme.palette.grey[200],
        '&:hover, &.Mui-hovered': {
          backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
        '&.Mui-selected': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
          '&:hover, &.Mui-hovered': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              ODD_OPACITY +
                theme.palette.action.selectedOpacity +
                theme.palette.action.hoverOpacity,
            ),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: alpha(
                theme.palette.primary.main,
                ODD_OPACITY + theme.palette.action.selectedOpacity,
              ),
            },
          },
        },
      },
    }));
  return (
    <div>
        <div>
            <NavBar />
        </div>

            <Grid container style={tableStyle}>
                <Grid item xs={16} sx={{textAlign:"center"}}>
                    <span style={headingStyle}><h3>Product Table</h3></span>
                </Grid>
            </Grid>


            <Box sx={{ height: 400, width: '100%' }} style={boxStyle}>
            
                <StripedDataGrid
                    // loading={loading}
                    rows={rows}
                    columns={columns}
                    disableColumnMenu
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    components={{
                        Toolbar: GridToolbar,
                      }}
                    
                      sx={{ '& .MuiDataGrid-columnHeaderTitle':{
                        fontWeight:"bold",
                        fontFamily:"Nunito",
                        fontVariant:"all-small-caps",
                        fontSize:"large",
                        textDecoration:"underline",},
                        '& .MuiDataGrid-columnSeparator':{
                              color:"black"
                        },
                  
                      }}
                    getRowClassName={(params) =>
                      params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'even'
                    }
                    showCellRightBorder
                    showColumnRightBorder
                    
                />
            
            </Box>
        
    </div>
  )
}


export default ProductTable