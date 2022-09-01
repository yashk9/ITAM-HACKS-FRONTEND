import React, { useEffect, useState } from 'react'
import NavBar from '../Landing Pages/NavBar';

import {  Box ,  Grid, } from '@mui/material'
import { DataGrid, GridToolbar ,gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';





function NetIpAddressTable() {

    
    const[netipAtr,setNetipAtr]=useState([])

    useEffect( ()=> {
        fetch("http://localhost:8080/netip/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setNetipAtr(result);
        })
    },[])

    const tableStyle={ marginTop:"10vh" }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'ipaddress', headerName: 'IP Address', width: 300 },
        { field: 'interfaceIndex', headerName: 'Interface Index', width: 200 },
        { field: 'interfaceAlias', headerName: 'Interface Alias', width: 200 },
        { field: 'addressFamily', headerName: 'Address Family', width: 200 },
        { field: 'type', headerName: 'Type', width: 200 },
        { field: 'prefixLength', headerName: 'Prefix Length', width: 200 },
        { field: 'prefixOrigin', headerName: 'Prefix Origin', width: 200 },
        { field: 'suffixOrigin', headerName: 'Suffix Origin', width: 200 },
        { field: 'addressState', headerName: 'Address State', width: 200 },
        { field: 'validLifetime', headerName: 'Valid Lifetime', width: 200 },
        { field: 'preferredLifetime', headerName: 'Preferred Lifetime', width: 200 },
        { field: 'skipAsSource', headerName: 'Skip As Source', width: 200 },
        { field: 'policyStore', headerName: 'Policy Store', width: 200 },
        { field: 'biosSeralNumber', headerName: 'Bios Serial Number', width: 200 },
    ]

    const rows = netipAtr.map( vals => (
        {id: vals.id , 
         ipaddress: vals.ipaddress, 
         interfaceIndex: vals.interfaceIndex,
         interfaceAlias: vals.interfaceAlias,
         addressFamily: vals.addressFamily,
         type: vals.type,
         prefixLength: vals.prefixLength,
         prefixOrigin: vals.prefixOrigin,
         suffixOrigin: vals.suffixOrigin,
         addressState: vals.addressState,
         validLifetime: vals.validLifetime,
         preferredLifetime: vals.preferredLifetime,
         skipAsSource: vals.skipAsSource,
         policyStore: vals.policyStore,
         biosSeralNumber:vals.biosSeralNumber,
        
        
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
                    <span style={headingStyle}><h3>Net IP Address Table</h3></span>
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

export default NetIpAddressTable