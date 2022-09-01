import { Avatar, Button, Grid, Paper, TextField } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    let navigate = useNavigate();
    const paperStyle = {padding: 26 , minheight: 'min-content' , width: 350 , margin: "5px auto"}
    const avatarStyle= { backgroundColor: '#00b2ffc2'}
    const btnstyle = { margin:'8px 0'}
    return (
        <div>
        <Grid>
            <div className='App'>            
                    <img src={process.env.PUBLIC_URL + "/ColorAtom.png"} className="App-logo" alt="logo"  />
            </div>
            <Paper elevation={10} style={paperStyle}>
            <Grid  align='center'>
                    <Avatar style={avatarStyle}  >
                        
                    </Avatar>
                    <h2>Sign Up</h2>
            </Grid>
            <TextField required id="outlined-basic" 
                            label="Full Name" 
                            variant="outlined" 
                            fullWidth
                            margin='dense'

                            />
            <TextField required id="outlined-basic" 
                            label="Username" 
                            variant="outlined" 
                            fullWidth
                            margin='dense'
                            /> 
            <TextField required id="outlined-basic" 
                            label="Email" 
                            variant="outlined" 
                            fullWidth
                            type="email"
                            margin='dense'
                            />    
            <TextField required id="outlined-basic" 
                            label="Password" 
                            variant="outlined" 
                            fullWidth
                            type="password"
                            margin='dense'
                            />
            <Button 
                    type='button' 
                    fullWidth 
                    variant="contained" 
                    color="primary"
                    onClick={ () => {} } 
                    style={btnstyle}>
                        Create Account 
                    </Button>   
                <Button 
                    type='button' 
                    fullWidth 
                    variant="contained" 
                    color="success"
                    onClick={ () => {navigate("/login")} } 
                    style={btnstyle}>
                         Back to Sign In
                    </Button>    
                   
            </Paper>
        </Grid>
        </div>
    )
}
export default Signup