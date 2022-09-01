import React from 'react';
import Places from './Places'
import Page1 from './Page1Cards'
import {  Grid } from '@mui/material';

import NavBar from '../Landing Pages/NavBar';








const Alloptions = () =>
{
    
    
    const gridContainer = {
        // paddingLeft:'70px',
        // paddingRight:'70px',
        // paddingTop:'150px',
        // paddingBottom:'30px',
        paddingTop:"18vh",
        alignItems:"center",
        justifyContent:"center",
        
        textAlign:"center"
    }
    const itemStyle ={ paddingTop:"16px"}
    
    
    return (
        <div>
            <div>
           <NavBar />
           </div>
            
                <Grid container  style={gridContainer} direction='row'>
                    
                        <Grid item xs={12} sm={6} lg={4} style={itemStyle}> 
                            <Page1 Places={Places[0]}  />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} style={itemStyle}>
                            <Page1 Places={Places[1]} />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} style={itemStyle}>
                            <Page1 Places={Places[2]}/>
                        </Grid>
                    
                    <Grid item xs={12} sm={6} lg={4} style={itemStyle}>
                        <Page1 Places={Places[3]}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} style={itemStyle}>
                        <Page1 Places={Places[4]}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} style={itemStyle}>
                        <Page1 Places={Places[5]}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} style={itemStyle}>
                        <Page1 Places={Places[6]}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} style={itemStyle}>
                        <Page1 Places={Places[7]}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} style={itemStyle}>
                        <Page1 Places={Places[8]}/>
                    </Grid>
                </Grid>
            
            

        </div>
    )
};

export default Alloptions;