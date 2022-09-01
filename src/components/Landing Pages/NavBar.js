import { Avatar, IconButton,  List, Drawer , Divider,  ListItemButton, ListItemText, Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import { useScrollTrigger } from '@mui/material';
import { Slide } from '@mui/material';
import PropTypes from 'prop-types';
import * as React from 'react';
import {  Link as RouterLink } from 'react-router-dom';
import '../../App.css'

import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';




function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
      });

      return (
        <Slide appear={false} direction="down" in={!trigger}>
          {children}
        </Slide>
      );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const NavBar = (props) => {


    const appbartyp = { fontFamily: "Nunito", flexGrow:"1" , textAlign:"center" }
    const navbarStyle = {
        background:"white",
        marginBottom:"20px",
        padding:"10px"
    }


    const itamcolor = { color:"#ff0000cc" }
    const avatarStyle = { color:"white" , background:"#ff000091", fontSize:"1.1rem" , width:"45px", height:"45px",}
    const toolbarStyle = { }
    const logoStyle = { paddingLeft:"10px" , paddingRight:"20px" }
    const textWrapStyle={ textOverflow:"ellipsis" , overflow:"hidden" }

    // DRAWER PROPERTIES
    const drawerListStyle={textAlign:"center"}
    const [state, setState] = React.useState({
        right: false,
      });
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >

          <List style={drawerListStyle} >
              <Typography variant="h5" sx={{marginTop:"40px" , fontFamily:"Nunito"}} >
                  WELCOME BACK
                  
              </Typography>

              <Typography variant="h5" sx={{fontFamily:"Nunito" , color:"#ff0000cc"}} >
                  <span style={textWrapStyle}> YASH K </span>
                  <br></br> 
                  <br></br>
              </Typography>

              <Divider />

              <ListItemButton sx={{textAlign:"center"}}>
                  <Avatar sx={{marginRight:"7px"}} />
                  
                  <ListItemText primary="Profile" />
                  
              </ListItemButton>

              <Divider />

              <ListItemButton sx={{textAlign:"center"}}>
                  <NotificationsNoneIcon sx={{marginRight:"7px"}} />
                  <ListItemText primary="Notifications" />
              </ListItemButton>

                <Divider />

              <ListItemButton sx={{textAlign:"center"}}>
                  <Settings sx={{marginRight:"7px"}} />
                  <ListItemText primary="Settings" />
              </ListItemButton>

                <Divider />

              <ListItemButton sx={{textAlign:"center"}} component={RouterLink} to='/'>
                  <Logout sx={{marginRight:"7px"}} />
                  <ListItemText primary="Log Out" />
              </ListItemButton>

            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))} */}
          </List>
        </Box>
      )

    return(
        <HideOnScroll {...props}>
        <AppBar style={navbarStyle} elevation={5}>
            <Toolbar style={toolbarStyle} margin="20px">
                
                <Avatar src={process.env.PUBLIC_URL + "/ColorAtom.png"} alt="logo" style={logoStyle} sx={{width:56 , height:56}} className="App-logo"/>
                    
                
                {/* <Typography variant="h5" color="Black" style={appbartyp} >
                    <span textColor="black">Dashboard</span>
                </Typography> */}
                <Typography variant="h5" color="Black" style={appbartyp} >
                    <span style={itamcolor}>ITAM</span> HACKS
                </Typography>


            {['right'].map((anchor) => (    
            <React.Fragment key={anchor}>
            <IconButton onClick={toggleDrawer(anchor, true)}>
                <Avatar style={avatarStyle}  >
                    YK
                </Avatar>
            </IconButton> 
            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
            >
                {list(anchor)}
          </Drawer>
        </React.Fragment>
            ))}

                

                
            </Toolbar>
        </AppBar>
        </HideOnScroll>
    )
}

export default NavBar;