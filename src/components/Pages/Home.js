import {  Button, Grid, Paper } from '@mui/material';
import React from 'react'

import '../../App.css';
import { useNavigate } from 'react-router-dom';



const Home = () => {

    let navigate = useNavigate();
    const paperStyle = {padding: 26 , height: '50vh' , width: 320 , margin: "50px auto"}
    const btnstyle = { margin:'20px 0'}
    

    return (
        <div  >
            
            <Grid>
                <div className='App'>            
                    <img src={process.env.PUBLIC_URL + "/ColorAtom.png"} className="App-logo" alt="logo"  />
                </div>
                <Paper elevation={10} style={paperStyle}>
                    <Grid  align='center'>
                            <h2>Welcome to ITAM Hacks</h2>
                </Grid>
                <Button 
                    type='button' 
                    fullWidth 
                    variant="contained" 
                    color="success"
                    onClick={ () => {navigate("/login")} } 
                    style={btnstyle}>
                        Sign In 
                    </Button>   
                <Button 
                    type='button' 
                    fullWidth 
                    variant="contained" 
                    color="primary"
                    onClick={ () => {navigate("/signup")} } 
                    style={btnstyle}>
                         Sign Up
                    </Button>     


                </Paper>
            </Grid>
        </div>
    )
}

export default Home;

