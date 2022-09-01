import React, { useEffect, useState } from 'react'
import NavBar from '../Landing Pages/NavBar';

import {  Box ,  Grid, } from '@mui/material'
import { DataGrid, GridToolbar ,gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';


function VolumeTable() {
    const[volAtr,setVolAtr]=useState([])

    useEffect( ()=> {
        fetch("http://localhost:8080/volumeTable/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setVolAtr(result);
        })
    },[])

    const tableStyle={ marginTop:"10vh" }
    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'driveLetter', headerName: 'Drive Letter', width: 200 },
        { field: 'friendlyName', headerName: 'Friendly Name', width: 200 },
        { field: 'fileSystemType', headerName: 'File System Type', width: 200 },
        { field: 'driveType', headerName: 'Drive Type', width: 200 },
        { field: 'healthStatus', headerName: 'Health Status', width: 200 },
        { field: 'operationalStatus', headerName: 'Operational Status', width: 200 },
        { field: 'sizeRemaining', headerName: 'Size Remaining', width: 200 },
        { field: 'size', headerName: 'Size', width: 200 },
        { field: 'biosSeralNumber', headerName: 'Bios Serial Number', width: 200 },
    ]

    const rows = volAtr.map( vals => (
          {id: vals.id , 
            driveLetter: vals.driveLetter,
            friendlyName: vals.friendlyName,
            fileSystemType: vals.fileSystemType,
            driveType: vals.driveType,
            healthStatus: vals.healthStatus,
            operationalStatus: vals.operationalStatus,
            sizeRemaining: vals.sizeRemaining,
            size: vals.size,
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
                    <span style={headingStyle}><h3>Volume Table</h3></span>
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

export default VolumeTable