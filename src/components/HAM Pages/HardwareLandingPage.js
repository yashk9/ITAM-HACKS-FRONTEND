import * as React from 'react';
import {  Collapse, Grid, List, ListItemButton, ListItemText, ListSubheader, Breadcrumbs, Typography, Link, Divider} from "@mui/material";
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import NavBar from '../Landing Pages/NavBar';
import {  Link as RouterLink } from 'react-router-dom';


const HardwareLandingPage = () =>
{
    const maingridStyle={ marginTop:"10vh" , alignItems:"center" , textAlign:"center"}
    const secondGridStyle={padding:"20px" ,alignItems:"center" , textAlign:"-webkit-center", marginTop:"30px" }
    const titleStyle={ fontFamily:"Nunito", fontSize:"2rem",fontWeight:"bold",padding:"20px", }
    const optionStyle={padding:"20px", fontSize:"1.2rem",textAlign:"-webkit-center"}
    const listBtnStle={ borderRadius:"20px" , boxShadow:"2px 2px 5px 1px" , fontFamily:"Nunito",textAlign:"-webkit-center" }
    const listBtnStle2={ borderRadius:"20px" , boxShadow:"2px 2px 5px 1px" , fontFamily:"Nunito" }
    const listStyle={  width: '100%', maxWidth: 450, bgcolor: 'none' ,fontFamily:"Nunito" , textAlign:"-webkit-center"}
    const [open, setOpen] = React.useState(false);
    const [open01, setOpen01] = React.useState(false);
    const [open001, setOpen001] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
      };
      const handleClick01 = () => {
        setOpen01(!open01);
      };
      const handleClick001 = () => {
        setOpen001(!open001);
      };


    const imgStyle={ height:"480px" , width:"480px" , padding:"30px"}
    function setNewImage(e) {
        document.getElementById("mainImage").src=process.env.PUBLIC_URL + "/HAM Images/AltHWmain.png" ;
    }

    function setOldImage(e) {
        document.getElementById("mainImage").src=process.env.PUBLIC_URL + "/HAM Images/HWmain.png";
    }


    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/page1" >
          Home
        </Link>,
        <Typography key="2" color="initial">
          HAM
        </Typography>
      ]
    
      const BCStyle={justifyContent:"flex-end" , display:"flex"}

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <Grid container style={maingridStyle}>
                <Grid item xs={12}  >
                    <div style={BCStyle}>
                    <Breadcrumbs separator="›" aria-label="breadcrumb" >
                    {breadcrumbs}
                    </Breadcrumbs>
                    </div>
                    
                </Grid>


                <Grid item container xs={12} >
                    <Grid item xs={6}>
                        <span style={titleStyle}> Hardware Asset Management </span>  
                        <br></br>
                        <br></br>
                        <Divider />                      
                    </Grid>
                </Grid>



                <Grid item container xs={6} >
                    


                    <Grid item xs={12} style={secondGridStyle}>
                    <List  style={listStyle}
                            subheader={<ListSubheader >
                                
                                </ListSubheader>}>
                            <ListItemButton onClick={handleClick} style={listBtnStle} sx={{backgroundColor:'#f8f8ff'}}>
                                <ListItemText>
                                    <span style={optionStyle}>
                                        Hardware Types
                                    </span></ListItemText>
                                    {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding style={listBtnStle} sx={{marginTop:"10px"}}>
                                <ListItemButton component={RouterLink} to={"/page1/hardLandPage/hwTypes/laptops"}>
                                    <ListItemText primary="Laptops" />
                                </ListItemButton>

                                <ListItemButton component={RouterLink} to={"/page1/hardLandPage/hwTypes/desktops"}>
                                    <ListItemText primary="Desktops" />
                                </ListItemButton>

                                <ListItemButton onClick={handleClick001} style={listBtnStle2}>
                                    <ListItemText primary="Servers" />
                                    {open001 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                    <Collapse in={open001} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding style={listBtnStle2} sx={{marginTop:"10px"}}>
                                            <ListItemButton sx={{ pl: 4 }} component={RouterLink} to={"/page1/hardLandPage/hwTypes/server/physical"}>
                                                <ListItemText primary="> Physical" />
                                            </ListItemButton>
                                            <ListItemButton sx={{ pl: 4 }} component={RouterLink} to={"/page1/hardLandPage/hwTypes/server/virtual"}>
                                                <ListItemText primary="> Virtual" />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>

                                <ListItemButton onClick={handleClick01} style={listBtnStle2}>
                                    <ListItemText primary="Accessories" />
                                    {open01 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                    <Collapse in={open01} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding style={listBtnStle2} sx={{marginTop:"10px"}}>
                                        <ListItemButton sx={{ pl: 4 }} component={RouterLink} to={"/page1/hardLandPage/hwTypes/monitors"}>
                                            <ListItemText primary="> Monitors" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }} component={RouterLink} to={"/page1/hardLandPage/hwTypes/headphones"}>
                                            <ListItemText primary="> Headphones" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }} component={RouterLink} to={"/page1/hardLandPage/hwTypes/dockstation"}>
                                            <ListItemText primary="> Docking Stations" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }} component={RouterLink} to={"/page1/hardLandPage/hwTypes/keyboards"}>
                                            <ListItemText primary="> Keyboards" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }} component={RouterLink} to={"/page1/hardLandPage/hwTypes/mouse"}>
                                            <ListItemText primary="> Mouse" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }} component={RouterLink} to={"/page1/hardLandPage/hwTypes/televisions"}>
                                            <ListItemText primary="> Television" />
                                        </ListItemButton>
                                    </List>
                                    </Collapse>



                            </List>
                            </Collapse>
                        </List>
                    </Grid>

                    <Grid item xs={12} style={secondGridStyle}>
                        
                        <List  style={listStyle}
                            subheader={<ListSubheader >
                                
                                </ListSubheader>}>
                            <ListItemButton  style={listBtnStle} sx={{backgroundColor:'#f8f8ff'}} component={RouterLink} to={"/page1/hardLandPage/hwMaint"}>
                                <ListItemText>
                                    <span style={optionStyle}>
                                        Hardware Maintenance
                                    </span></ListItemText>
                                    
                            </ListItemButton>
                        </List>


                        {/* <Button style={btnStyle} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(12 165 181 / 52%)"},}} component={RouterLink} to={{pathname:"/page1/hardLandPage/hwMaintenance"}}>
                            <Box style={boxStyle}>
                                
                                <div>
                                 <img src={process.env.PUBLIC_URL + "/Inventory Images/desktop.png"} alt="green" height="38px" width="38px" style={ITimageStyle}></img> 
                          
                                </div>
                           <    br></br>
                           
                                <span style={btnTextStyle}>Hardware Maintenance</span> 
                           
                          </Box>
                          </Button> */}
                    </Grid>
                </Grid>

                <Grid item xs={6} sx={{alignSelf:"flex-start"}}>
              
                        <img id="mainImage" 
                            src={process.env.PUBLIC_URL + "/HAM Images/HWmain.png"} 
                            alt="green" 
                            style={imgStyle}
                            onMouseOver={setNewImage} 
                            onMouseOut={setOldImage}
                            ></img>
              
                </Grid>


            </Grid>
        </div>
    )
};

export default HardwareLandingPage;