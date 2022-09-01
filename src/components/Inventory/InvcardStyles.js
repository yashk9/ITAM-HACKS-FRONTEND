import React from 'react'
import {  Box , Grid , Button , Breadcrumbs , Link, Typography, Divider} from '@mui/material';
import NavBar from '../Landing Pages/NavBar';

import {  Link as RouterLink } from 'react-router-dom';

const InvcardStyles = () => {

  const gridStyle={ marginTop:"10vh", justifyContent:"flex-end"}
  // const page = { <ITAssetsPg /> };
  const boxStyle={
                  
                  background: "none",
                  
                  justifySelf: "center",
                  position: "relative",
                  
                  alignItems: "center",
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontFamily: "Nunito",
                  fontSize: "2rem",
                  border: "3px solid rgb(0 0 0 / 0%)",
                  
                  
                }

  const descStyle={fontSize:"1rem" , color:"grey" , fontStyle:"italic"}
  const imgStyle={ height:"355px" , width:"389px" , marginLeft:"40px" , marginTop:"150px"}
  const titleStyle={ fontFamily:"Nunito", fontSize:"2rem",fontWeight:"bold" }
  const btnTextStyle={color:"#ff0000cc" , fontFamily:"Nunito", textAlign:"center", verticalAlign:"middle",fontWeight:"bold",fontSize:"1rem"}
  const ITimageStyle={marginRight:"20px"}
  const itImgDivStyle={marginBottom:"-18px"}
  const btnStyle={borderRadius:"50px"}

  const optionBoxStyle={ padding:"20px" , height:"100px", width:"300px", border: "3px solid rgb(0 0 0 / 0%)" ,borderRadius:"50px",borderBottomColor:"cornflowerblue", }

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/page1" >
      Home
    </Link>,
    <Typography key="2" color="initial">
      Inventory
    </Typography>
  ]

  const BCStyle={justifyContent:"flex-end" , display:"flex"}


  return (
    <div>
        <div>
          <NavBar />
        </div>
        <Grid container spacing={1} style={gridStyle}>
          <Grid item xs={12}  >
            <div style={BCStyle}>
            <Breadcrumbs separator="›" aria-label="breadcrumb" >
              {breadcrumbs}
            </Breadcrumbs>
            </div>
            
          </Grid>
          <Grid item xs={6}>
            
            <Grid item xs={12}>
                <Box style={boxStyle}>
                <span style={titleStyle}> Inventory </span>
                 <br></br>
                 <Divider />
                 <br></br>
                    <span style={descStyle}>
                      " Inventory holds the complete list of all items in your stock "
                    </span>
                </Box>
            </Grid>
                <Grid item container sx={{alignItems:"center"}}>
                      <Grid item xs={12} sx={{margin:"20px" , textAlign:"center"}}>
                      <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/invLandPage/itAssets"}}>
                          <Box style={optionBoxStyle}>
                          <div style={itImgDivStyle}>
                          <img src={process.env.PUBLIC_URL + "/Inventory Images/desktop.png"} alt="green" height="38px" width="38px" style={ITimageStyle}></img>
                          
                          <img src={process.env.PUBLIC_URL + "/Inventory Images/server.png"} alt="green" height="38px" width="38px"  ></img>
                          </div>
                           <br></br>
                           
                            <span style={btnTextStyle}>IT Assets</span> 
                           
                          </Box>
                          </Button>
                      </Grid>
                      
                      <Grid item xs={12} sx={{margin:"20px" , textAlign:"center"}}>
                        <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/invLandPage/cloudAssets"}}>
                          <Box style={optionBoxStyle}>
                          
                          <img src={process.env.PUBLIC_URL + "/Inventory Images/cloud.png"} alt="green" height="50px" width="50px"></img>
                           <br></br>
                           
                            <span style={btnTextStyle}>Cloud Assets</span> 
                           
                          </Box>
                          </Button>
                      </Grid>
                  </Grid>
          </Grid>
            <Grid item xs={12} sm={6} >
              
              <img src={process.env.PUBLIC_URL + "/Inventory Images/inv.png"} alt="green" style={imgStyle}></img>
              
            </Grid>
        </Grid>
    </div>
  )
}


export default InvcardStyles;
