import { Button, Grid , Box, Typography} from '@mui/material';
import React from 'react'

import NavBar from '../Landing Pages/NavBar';
import {  Link as RouterLink } from 'react-router-dom';

function SWDiscoveryPg() {


  const btnStyle={borderRadius:"50px"}
    const boxStyles={border: "3px solid #61dafb3b" , padding:"20px" , height:"100px", width:"300px" ,borderRadius:"50px", textAlign:"center" }
    const btnTextStyle={color:"#ff0000cc" , fontFamily:"Nunito", textAlign:"center", verticalAlign:"middle",fontWeight:"bold",fontSize:"1rem"}
    const mainGridStyle={marginTop:"15vh", justifyContent:"center"}

  return (
    <div>
      <div>
            <NavBar />
      </div>      

            <Grid container style={mainGridStyle}>
              <Grid item xs={12} sx={{textAlign:"center"}}>
                <Typography sx={{fontFamily:"Nunito", fontSize:"2rem"}}> Software Discovery </Typography>
                <br></br>
                <br></br>
              </Grid>
              <Grid item container xs={6}>
              <Grid item xs={12} sx={{textAlign:"center"}}>
                        <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/dbTables/processTable"}}>
                                                        <Box style={boxStyles} >
                                                        
                                                        <br></br>
                                                        
                                                            <span style={btnTextStyle}>Process </span> 
                                                        
                                                        </Box>
                        </Button>
                </Grid>
                <Grid item xs={12} sx={{textAlign:"center"}}>
                        <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/dbTables/productTable"}}>
                                                        <Box style={boxStyles} >
                                                        
                                                        <br></br>
                                                        
                                                            <span style={btnTextStyle}>Products</span> 
                                                        
                                                        </Box>
                        </Button>
                </Grid>
                <Grid item xs={12} sx={{textAlign:"center"}}>
                        <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/dbTables/servicesTable"}}>
                                                        <Box style={boxStyles} >
                                                        
                                                        <br></br>
                                                        
                                                            <span style={btnTextStyle}>Services</span> 
                                                        
                                                        </Box>
                        </Button>
                </Grid>
                </Grid>
            </Grid>
          </div>
  )
}

export default SWDiscoveryPg