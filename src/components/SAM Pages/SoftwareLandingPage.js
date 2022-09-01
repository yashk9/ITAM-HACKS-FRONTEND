import {  Box , Grid , Button , Breadcrumbs, Typography, Link , Divider} from '@mui/material';
import NavBar from '../Landing Pages/NavBar'
import React from 'react';
import {  Link as RouterLink } from 'react-router-dom';

const SoftwareLandingPage = () =>
{

    const gridStyle={ marginTop:"10vh", justifyContent:"flex-start"}
  

  //const descStyle={fontSize:"1rem" , color:"grey" , fontStyle:"italic"}
  const imgStyle={ height:"355px" , width:"389px" , padding:"30px"}

  const titleStyle={ fontFamily:"Nunito", fontSize:"2rem",fontWeight:"bold" }
  const btnTextStyle={color:"#ff0000cc" , fontFamily:"Nunito", textAlign:"center", verticalAlign:"middle",fontWeight:"bold",fontSize:"1rem"}
  //const ITimageStyle={marginRight:"20px"}
  const itImgDivStyle={marginBottom:"-18px"}
  const btnStyle={borderRadius:"50px"}
  const boxStyles={border: "3px solid rgb(0 0 0 / 0%)" , padding:"20px" , height:"100px", width:"300px", borderBottomColor:"currentcolor" ,borderRadius:"50px" }

  function setNewImage(e) {
    document.getElementById("mainImage").src=process.env.PUBLIC_URL + "/AllOption Images/AltSoftware.png" ;
    }

function setOldImage(e) {
    document.getElementById("mainImage").src=process.env.PUBLIC_URL + "/AllOption Images/software.png";
    }



    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/page1" >
          Home
        </Link>,
        <Typography key="2" color="initial">
          SAM
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
                            <span style={titleStyle}> Software Asset Management </span>
                            <br></br>
                            <br></br>
                            <Divider />
                        </Grid>
            </Grid>
            
            <Grid xs={6} >
                        



                        <Grid item container sx={{alignItems:"center"}}>
                            <Grid item xs={12} sx={{margin:"20px" , textAlign:"center"}}>
                                    <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/softLandPage/DiscoveryPg"}}>
                                            <Box style={boxStyles} >
                                            <div style={itImgDivStyle}>
                                            <img src={process.env.PUBLIC_URL + "/SAM Images/discovery.png"} alt="green" height="38px" width="38px" ></img>
                                            
                                            </div>
                                            <br></br>
                                            
                                                <span style={btnTextStyle}>DISCOVERY</span> 
                                            
                                            </Box>
                                    </Button>
                            </ Grid>

                            <Grid item xs={12} sx={{margin:"20px" , textAlign:"center"}}>
                                    <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/softLandPage/EntitlePg"}}>
                                            <Box style={boxStyles} >
                                            <div style={itImgDivStyle}>
                                            <img src={process.env.PUBLIC_URL + "/SAM Images/entitlement.png"} alt="green" height="38px" width="38px" ></img>
                                            
                                            </div>
                                            <br></br>
                                            
                                                <span style={btnTextStyle}>ENTITLEMENT</span> 
                                            
                                            </Box>
                                    </Button>
                            </ Grid>
                      </Grid>


                      

            </Grid>

            <Grid item xs={6} sx={{textAlign:"center"}}>
              
                    <img id="mainImage" 
                        src={process.env.PUBLIC_URL + "/AllOption Images/software.png"} 
                        alt="green" style={imgStyle}
                        onMouseOver={setNewImage} 
                        onMouseOut={setOldImage}>

                    </img>
              
            </Grid>

        </Grid>


        </div>
    )
};

export default SoftwareLandingPage;