import { Breadcrumbs, Collapse, Grid, List, ListItemButton, ListItemText, ListSubheader, Link , Typography} from '@mui/material'
import * as React from 'react';
import NavBar from '../Landing Pages/NavBar'
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import {  Link as RouterLink } from 'react-router-dom';

function ITAssetsPg() {

    const [open, setOpen] = React.useState(false);
    const [op, setOp] = React.useState(false);
    const [open01, setOpen01] = React.useState(false);
    const [open02, setOpen02] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

    const handleClickk = () => {
        setOp(!op);
    };
    const handleClick01 = () => {
        setOpen01(!open01);
    };
    const handleClick02 = () => {
        setOpen02(!open02);
    };
  
  

    const gridBaseStyle={marginTop:"80px" , alignItems:"center" , textAlign:"center"}
    const titleStyle={ fontFamily:"Nunito", fontSize:"2rem",fontWeight:"bold",padding:"20px", }
    const optionStyle={padding:"20px", fontSize:"1.2rem"}
    const listBtnStle={ borderRadius:"20px" , boxShadow:"2px 2px 5px 1px"}

    const BCStyle={justifyContent:"flex-end" , display:"flex"}
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/page1" >
          Home
        </Link>,
        <Link underline="hover" key="2" color="inherit" href="/page1/invLandPage" >
        Inventory
      </Link>,
        <Typography key="3" color="initial">
          IT Assets
        </Typography>
      ]

  return (<div>
            <div>
                <NavBar/>
            </div>
            <Grid container style={gridBaseStyle}>
                <Grid item xs={12}  >
                    <div style={BCStyle}>
                    <Breadcrumbs separator="›" aria-label="breadcrumb" >
                    {breadcrumbs}
                    </Breadcrumbs>
                    </div>
                </Grid>
                <Grid item container xs={12} sx={{padding:"10px"}}>
                    <Grid item xs={12}>
                        <span style={titleStyle}> IT ASSETS </span>
                        
                    </Grid>
                </Grid>


                <Grid item container xs={12}>
                    <Grid item xs={6} sx={{padding:"20px", fontSize:"1.2rem" , textAlign:"-webkit-center"}} >
                        
                        <List sx={{ width: '100%', maxWidth: 450, bgcolor: 'none' }}
                            subheader={<ListSubheader sx={{backgroundColor:'none'}}>
                                
                                </ListSubheader>}>
                            <ListItemButton onClick={handleClick} style={listBtnStle}>
                                <ListItemText>
                                    <span style={optionStyle}>
                                        Discovery Inventory
                                    </span></ListItemText>
                                    {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding style={listBtnStle} sx={{marginTop:"10px"}}>
                                    
                                    <ListItemButton onClick={handleClick01}>
                                        
                                        <ListItemText primary="Hardware" />
                                        {open01 ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                            <Collapse in={open01} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding sx={{marginTop:"10px"}} >
                                                    <ListItemButton sx={{ pl: 4 }} component={RouterLink} to={{pathname:"/page1/hardLandPage/hwTypes/laptops"}}>
                                                        <ListItemText primary="> Laptops" />                                                
                                                    </ListItemButton>
                                                    <ListItemButton sx={{ pl: 4 }} component={RouterLink} to={{pathname:"/page1/hardLandPage/hwTypes/laptops"}}>
                                                        <ListItemText primary="> Desktops" />                                                
                                                    </ListItemButton>
                                                    <ListItemButton sx={{ pl: 4 }} component={RouterLink} to={{pathname:"/page1/invLandPage/itAssets/dHwAcc"}}>
                                                        <ListItemText primary="> Accessories" />                                                
                                                    </ListItemButton>                                               
                                                </List>
                                            </Collapse>


                                    <ListItemButton component={RouterLink} to={{pathname:"/page1/softLandPage/DiscoveryPg"}}>                                        
                                        <ListItemText primary="Softwares" />    
                                                                           
                                    </ListItemButton>
                                    


                                    <ListItemButton component={RouterLink} to={{pathname:"/page1/invLandPage/itAssets/dSer"}}>                                        
                                        <ListItemText primary="Servers" />                                        
                                    </ListItemButton>
                                    <ListItemButton component={RouterLink} to={{pathname:"/page1/invLandPage/itAssets/dNet"}}>                                        
                                        <ListItemText primary="Network Devices" />                                        
                                    </ListItemButton>
                                    <ListItemButton component={RouterLink} to={{pathname:"/page1/invLandPage/itAssets/dVir"}}>                                        
                                        <ListItemText primary="Virtual Machine" />                                        
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </Grid>
                    
                




                    <Grid item xs={6} sx={{padding:"20px", fontSize:"1.2rem", textAlign:"-webkit-center"}}>
                        
                        <List sx={{ width: '100%', maxWidth: 450, bgcolor: 'none', textAlign:"-webkit-center" }}
                            subheader={<ListSubheader sx={{backgroundColor:'none'}}>
                                
                                </ListSubheader>}>
                            <ListItemButton onClick={handleClickk} style={listBtnStle}>
                                <ListItemText>
                                    <span style={optionStyle}>
                                        Procurement Inventory
                                    </span></ListItemText>
                                    {op ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            <Collapse in={op} timeout="auto" unmountOnExit >
                            <List component="div" disablePadding style={listBtnStle} sx={{marginTop:"10px"}}>
                            <ListItemButton onClick={handleClick02}>
                                        
                                        <ListItemText primary="Hardware" />
                                        {open02 ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                            <Collapse in={open02} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding sx={{marginTop:"10px"}}>
                                                    <ListItemButton sx={{ pl: 4 }} component={RouterLink} to={{pathname:"/page1/invLandPage/itAssets/PHwLap"}}>
                                                        <ListItemText primary="> Laptops" />                                                
                                                    </ListItemButton>
                                                    <ListItemButton sx={{ pl: 4 }} component={RouterLink} to={{pathname:"/page1/invLandPage/itAssets/PHwDes"}}>
                                                        <ListItemText primary="> Desktops" />                                                
                                                    </ListItemButton>
                                                    <ListItemButton sx={{ pl: 4 }} component={RouterLink} to={{pathname:"/page1/invLandPage/itAssets/dHwAcc"}}>
                                                        <ListItemText primary="> Accessories" />                                                
                                                    </ListItemButton>                                               
                                                </List>
                                            </Collapse>
                                    <ListItemButton component={RouterLink} to={{pathname:"/page1/invLandPage/itAssets/pSer"}}>
                                        
                                        <ListItemText primary="Servers" />
                                        
                                    </ListItemButton>
                                    <ListItemButton component={RouterLink} to={{pathname:"/page1/invLandPage/itAssets/pSof"}}>
                                        
                                        <ListItemText primary="Software" />
                                        
                                    </ListItemButton>
                                    <ListItemButton component={RouterLink} to={{pathname:"/page1/invLandPage/itAssets/pNet"}}>
                                        
                                        <ListItemText primary="Network Devices" />
                                        
                                    </ListItemButton>
                                    <ListItemButton component={RouterLink} to={{pathname:"/page1/invLandPage/itAssets/pVir"}}>
                                        
                                        <ListItemText primary="Virtual Machine" />
                                        
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                            
                    </Grid>
                </Grid>
                
            </Grid>
    </div>
  )
}
export default ITAssetsPg