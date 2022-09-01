import { Avatar, Button, Checkbox, FormControlLabel, Grid, InputAdornment, Link, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import { AccountCircle } from '@mui/icons-material';
import PasswordIcon from '@mui/icons-material/Password';

import { useNavigate } from 'react-router-dom';
//import Alloptions from './Alloptions';
import {  Link as RouterLink } from 'react-router-dom';






const Login = () => {
 

    const [name,setName]=useState('')
    const [pass,setPass] = useState('')
    
    const handleClick=(e)=>{
        e.preventDefault()
        const detailss={name,pass}
        fetch("http://localhost:9191/home",{
            method:"GET"
            
        }).then( ()=> {console.log("logged in")})
    }

    let navigate = useNavigate();
    const paperStyle = {padding: 26 , height: 'min-content' , width: 370 , margin: "20px auto"}
    const avatarStyle = { backgroundColor: '#00b2ffc2'}
    const btnstyle = { margin:'15px 0'}
    

    return ( 
        <div>
            <Grid  >
                <div className='App'>            
                    <img src={process.env.PUBLIC_URL + "/ColorAtom.png"} className="App-logo" alt="logo"  />
                </div>
                <Paper elevation={10} style={paperStyle}>
                    <Grid  align='center'>
                        <Avatar style={avatarStyle}  >
                            <HttpsOutlinedIcon />
                        </Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField required id="outlined-basic" 
                            label="Username" 
                            //size="small"
                            variant="outlined" 
                            //placeholder='Enter Username'
                            fullWidth
                            margin='normal'
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start" >
                                    <AccountCircle fontSize="small"/>
                                </InputAdornment>
                                ),
                            }}
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            />
                    <TextField required id="outlined-basic" 
                            label="Password"
                            //size="small" 
                            variant="outlined" 
                            //placeholder='Enter Password'
                            type="password"
                            margin='normal'
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start" >
                                    <PasswordIcon fontSize="small"/>
                                </InputAdornment>
                                ),
                            }}
                            value={pass}
                            onChange={(e)=>setPass(e.target.value)}
                            />
                    
                    <FormControlLabel   
                        control={
                            <Checkbox 
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                                
                            />
                                } 
                            label={<Typography variant="body2" color="textSecondary">Remember Me</Typography>}
                        
                    />
                    <Button type='submit' fullWidth variant="contained" color="success" style={btnstyle} component={RouterLink} to='/page1'>Sign In </Button>    
                    
                    <Typography>
                        <Link
                            component="button"
                            variant="body3"
                            onClick={() => {
                                
                            }}
                        >
                            Forget Password?
                        </Link>
                    </Typography>

                    <Typography>
                        <Link
                            component="button"
                            variant="body3"
                            onClick={() => {
                                navigate("/signup")
                            }}
                        >
                            Create Account
                        </Link>
                    </Typography>
                    <Typography>
                        <Link
                            component="button"
                            variant="body3"
                            onClick={() => {
                                navigate("/")
                            }}
                        >
                            Home
                        </Link>
                    </Typography>

                </Paper>
            </Grid>
        </div>
    )
    
}

export default Login