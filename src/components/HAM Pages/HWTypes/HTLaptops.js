import React, { useEffect, useState } from 'react'
import NavBar from '../../Landing Pages/NavBar';
import {  Box ,  Grid, } from '@mui/material'
import { DataGrid, GridToolbar ,gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';



function HTLaptops(props){

  const[compInfo,setCompInfo]=useState([])
  const[biosSN,setBiosSN] = React.useState(['null'])
  let navigate = useNavigate();

  

  // const nav = () => {
  //   console.log({...{biosSN}})
  //   return (
      
      
  //   )
  // }
  



    useEffect( ()=> {
        fetch("http://localhost:8080/compInfo/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setCompInfo(result);
        })
        // handleRowDoubleClick();
    },[])

    

    const tableStyle={ marginTop:"10vh" }
    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'BiosSeralNumber', headerName: 'Bios Seral Number', width: 250,  },
        { field: 'CsName', headerName: 'Cs Name', width: 250 },
        { field: 'CsUserName', headerName: 'Cs User Name', width: 250 },
        { field: 'OsName', headerName: 'Os Name', width: 350 }
    ]

    const rows = compInfo.map( vals => (
      {id: vals.id , 
        BiosSeralNumber: vals.biosSeralNumber,
        CsName: vals.csName,
        CsUserName: vals.csUserName,
        OsName: vals.osName,
      }
    )
    )


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


    const handleRowDoubleClick = (param) => {
        setBiosSN(param.row.BiosSeralNumber)
        console.log({...{biosSN}})
        console.log("hii")
        navigate("/page1/hardLandPage/hwTypes/laptops/info",{ state:{bio:biosSN}} )
         
    };


  return (
    <div>
        <div>
            <NavBar />
        </div>

            <Grid container style={tableStyle}>
                <Grid item xs={16} sx={{textAlign:"center"}}>
                    <span style={headingStyle}><h3>Laptops Info</h3></span>
                </Grid>
            </Grid>


            <Box sx={{ height: 400, width: '100%' }} style={boxStyle}>
            
                <StripedDataGrid
                    //loading={}
                    rows={rows}
                    columns={columns}
                    onRowClick={ (params) => { setBiosSN(params.row.BiosSeralNumber) }}
                    //onSelectionModelChange = { (params) => { setBiosSN(params.BiosSeralNumber)}}
                    onRowDoubleClick={ handleRowDoubleClick} 
                    disableColumnMenu
                    pageSize={20}
                    rowsPerPageOptions={[20]}
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
            {/* <LaptopInfoPage bios={biosSN} /> */}
            {/* //{biosSN} */}
            </Box>
            
        
    </div>
  )
}
export default HTLaptops
