import { Button, Grid , Box} from '@mui/material';
//import React, {useState , useEffect} from 'react'

import NavBar from './NavBar';
import {  Link as RouterLink } from 'react-router-dom';


// import {  Box} from '@mui/material'
// import { DataGrid, GridToolbar  } from '@mui/x-data-grid';
const CmdbLandingPg = () =>
{

    const btnStyle={borderRadius:"50px"}
    const boxStyles={border: "3px solid #61dafb3b" , padding:"20px" , height:"100px", width:"300px" ,borderRadius:"50px" , textAlign:"center"}
    const btnTextStyle={color:"#ff0000cc" , fontFamily:"Nunito", textAlign:"center", verticalAlign:"middle",fontWeight:"bold",fontSize:"1rem"}
    const mainGridStyle={marginTop:"15vh", justifyContent:"center"}
    

    return (
        //"This Is CMDB Landing Page"
        <div>
            <NavBar />

            <Grid container style={mainGridStyle}>
                <Grid item xs={4}>
                        <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/dbTables/netipTable"}}>
                                                        <Box style={boxStyles} >
                                                        
                                                        <br></br>
                                                        
                                                            <span style={btnTextStyle}>Net Ip Address Table</span> 
                                                        
                                                        </Box>
                        </Button>
                </Grid>
                <Grid item xs={4}>
                        <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/dbTables/compInfo"}}>
                                                        <Box style={boxStyles} >
                                                        
                                                        <br></br>
                                                        
                                                            <span style={btnTextStyle}>Computer Info Table</span> 
                                                        
                                                        </Box>
                        </Button>
                </Grid>
                <Grid item xs={4}>
                        <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/dbTables/certTable"}}>
                                                        <Box style={boxStyles} >
                                                        
                                                        <br></br>
                                                        
                                                            <span style={btnTextStyle}>Certificates Table</span> 
                                                        
                                                        </Box>
                        </Button>
                </Grid>
                <Grid item xs={4}>
                        <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/dbTables/netAdapTable"}}>
                                                        <Box style={boxStyles} >
                                                        
                                                        <br></br>
                                                        
                                                            <span style={btnTextStyle}>Network Adapter Table</span> 
                                                        
                                                        </Box>
                        </Button>
                </Grid>
                <Grid item xs={4}>
                        <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/dbTables/hotfixTable"}}>
                                                        <Box style={boxStyles} >
                                                        
                                                        <br></br>
                                                        
                                                            <span style={btnTextStyle}>Hotfix Table</span> 
                                                        
                                                        </Box>
                        </Button>
                </Grid>
                <Grid item xs={4}>
                        <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/dbTables/processTable"}}>
                                                        <Box style={boxStyles} >
                                                        
                                                        <br></br>
                                                        
                                                            <span style={btnTextStyle}>Process Table</span> 
                                                        
                                                        </Box>
                        </Button>
                </Grid>
                <Grid item xs={4}>
                        <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/dbTables/processorTable"}}>
                                                        <Box style={boxStyles} >
                                                        
                                                        <br></br>
                                                        
                                                            <span style={btnTextStyle}>Processor Table</span> 
                                                        
                                                        </Box>
                        </Button>
                </Grid>
                <Grid item xs={4}>
                        <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/dbTables/productTable"}}>
                                                        <Box style={boxStyles} >
                                                        
                                                        <br></br>
                                                        
                                                            <span style={btnTextStyle}>Product Table</span> 
                                                        
                                                        </Box>
                        </Button>
                </Grid>
                <Grid item xs={4}>
                        <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/dbTables/servicesTable"}}>
                                                        <Box style={boxStyles} >
                                                        
                                                        <br></br>
                                                        
                                                            <span style={btnTextStyle}>Services Table</span> 
                                                        
                                                        </Box>
                        </Button>
                </Grid>
                <Grid item xs={4}>
                        <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/dbTables/volumeTable"}}>
                                                        <Box style={boxStyles} >
                                                        
                                                        <br></br>
                                                        
                                                            <span style={btnTextStyle}>Volume Table</span> 
                                                        
                                                        </Box>
                        </Button>
                </Grid>
            </Grid>
        </div>

    )             
                    }                      
            

    
export default CmdbLandingPg;