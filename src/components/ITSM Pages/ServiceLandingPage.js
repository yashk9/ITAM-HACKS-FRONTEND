import {  Box , Grid , Button , Breadcrumbs, Typography, Link , Divider} from '@mui/material';
import NavBar from '../Landing Pages/NavBar'
import React from 'react';
import {  Link as RouterLink } from 'react-router-dom';

const ServiceLandingPage = () =>
{

    const gridStyle={ marginTop:"10vh", justifyContent:"flex-start"}
  


  const imgStyle={ height:"355px" , width:"389px" , marginTop:"-60px"}

  const titleStyle={ fontFamily:"Nunito", fontSize:"2rem",fontWeight:"bold" }
  const btnTextStyle={color:"#ff0000cc" , fontFamily:"Nunito", textAlign:"center", verticalAlign:"middle",fontWeight:"bold",fontSize:"1rem"}

  const itImgDivStyle={marginBottom:"-18px"}
  const btnStyle={borderRadius:"50px" ,padding:"0px"}
  const boxStyles={border: "3px solid rgb(0 0 0 / 0%)"  , height:"100px", width:"300px", borderBottomColor:"currentcolor" ,borderRadius:"50px" }

  function setNewImage(e) {
    document.getElementById("mainImage").src=process.env.PUBLIC_URL + "/AllOption Images/AltService.png" ;
    }

function setOldImage(e) {
    document.getElementById("mainImage").src=process.env.PUBLIC_URL + "/AllOption Images/service.png";
    }


    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/page1" >
          Home
        </Link>,
        <Typography key="2" color="initial">
          ITSM
        </Typography>
      ]
    
      const BCStyle={justifyContent:"flex-end" , display:"flex"}



    return (
        <div>
        <div>
            <NavBar />

        </div>
        <Grid container style={gridStyle} >
            <Grid item xs={12}  >
                <div style={BCStyle}>
                <Breadcrumbs separator="›" aria-label="breadcrumb" >
                {breadcrumbs}
                </Breadcrumbs>
                </div>
                
            </Grid>


            <Grid item container xs={12} >
                <Grid item xs={6} sx={{textAlign:"center"}}>
                            <span style={titleStyle}> IT Service Management </span>
                            <br></br>
                            <br></br>
                            <Divider />
                            <br></br>
                        
                            
                        </Grid>

            </Grid>


            <Grid xs={6} >
                        

                       

                        <Grid item container sx={{alignItems:"center" , justifyContent:"center"}}>

                            
                            <Grid item xs={5} sx={{  textAlign:"center"}}>
                                    <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/servLandPage/incPg"}}>
                                            <Box style={boxStyles} >
                                            <div style={itImgDivStyle}>
                                            <img src={process.env.PUBLIC_URL + "/ITSM Images/incidence.png"} alt="green" height="45px" width="45px" ></img>
                                            
                                            </div>
                                            <br></br>
                                            
                                                <span style={btnTextStyle}>Incidence</span> 
                                            
                                            </Box>
                                    </Button>
                            </ Grid>

                            <Grid item xs={5} sx={{ textAlign:"center"}}>
                                    <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/servLandPage/servReqPg"}}>
                                            <Box style={boxStyles} >
                                            <div style={itImgDivStyle}>
                                            <img src={process.env.PUBLIC_URL + "/ITSM Images/servReq.png"} alt="green" height="45px" width="45px" ></img>
                                            
                                            </div>
                                            <br></br>
                                            
                                                <span style={btnTextStyle}>Service Request</span> 
                                            
                                            </Box>
                                    </Button>
                            </ Grid>

                            <Grid item xs={12}>
                                <br></br>
                                <br></br>
                            </Grid>

                            <Grid item xs={5} sx={{ textAlign:"center"}}>
                                    <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/servLandPage/chngMngmtPg"}}>
                                            <Box style={boxStyles} >
                                            <div style={itImgDivStyle}>
                                            <img src={process.env.PUBLIC_URL + "/ITSM Images/chngMngmt.png"} alt="green" height="45px" width="45px" ></img>
                                            
                                            </div>
                                            <br></br>
                                            
                                                <span style={btnTextStyle}>Change Request</span> 
                                            
                                            </Box>
                                    </Button>
                            </ Grid>

                            <Grid item xs={5} sx={{textAlign:"center"}}>
                                    <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/servLandPage/probMngmtPg"}}>
                                            <Box style={boxStyles} >
                                            <div style={itImgDivStyle}>
                                            <img src={process.env.PUBLIC_URL + "/ITSM Images/probMngmt.png"} alt="green" height="45px" width="45px" ></img>
                                            
                                            </div>
                                            <br></br>
                                            
                                                <span style={btnTextStyle}>Problem Management</span> 
                                            
                                            </Box>
                                    </Button>
                            </ Grid>

                      </Grid>


                      

            </Grid>

            <Grid item xs={6} sx={{textAlign:"center"}}>
              
                    <img id="mainImage" 
                        src={process.env.PUBLIC_URL + "/AllOption Images/service.png"} 
                        alt="green" style={imgStyle}
                        onMouseOver={setNewImage} 
                        onMouseOut={setOldImage}>

                    </img>
              
            </Grid>

        </Grid>


        </div>
    )
};

export default ServiceLandingPage;