import React from 'react'
import {   Card , CardMedia , Typography , CardContent, CardActionArea , Divider } from '@mui/material'; 
import {  Link as RouterLink } from 'react-router-dom';




const Page1 = ({Places}) =>
{
    
    const cardStyles ={ background:'ghostwhite', 
                        maxWidth:'300px' , 
                        maxHeight:'300px' , 
                        // paddingRight:'20px',
                        // paddingLeft:'20px' ,
                        minWidth:'290px',
                        minHeight:'271px',
                        alignItems:'center',
                        boxShadow:"5",
                        userSelect:"all",
                        borderRadius:"20px",
                        
                    }
    const titleStyle ={ fontSize:'1.5rem' , fontWeight: 'bold', color:'black', fontFamily:"Nunito"}
    const descStyle ={  color: 'grey' , fontSize:'1.1rem' , fontFamily:"Nunito"}
    const imgStyle ={ height:"80px" , width:"80px", padding:"20px",  textAlign:"center"}
    let placelink = { pathname:Places.landingPage };
    let newImage = {pathname:Places.altimgUrl};
    function setNewImage(e) {
        document.getElementById(Places.Pid).src=Places.altimgUrl;
        console.log(newImage)
    }

    function setOldImage(e) {
        document.getElementById(Places.Pid).src=Places.imageUrl;
    }

    const divStyle = { textAlign:"-webkit-center" }
    return (
        <div style={divStyle}>
            {/* <Collapse in={checked} {...(checked ? {timeout:500}: {})}> */}
            <Card style={cardStyles} sx={{ ':hover' :{ boxShadow:"5px 5px 20px rgb(34 181 181 / 58%)"},}}>
            
                <CardActionArea component={RouterLink} to={placelink} >
                <div>
                <CardMedia >
                         <img id={Places.Pid} src={Places.imageUrl} alt="green" style={imgStyle} onMouseOver={setNewImage} onMouseOut={setOldImage}></img> 
                </CardMedia>
                
                <CardContent sx={{padding:"10px" , paddingBottom:"2px"}}>
                    <Typography style={titleStyle}>
                    {Places.title}
                    </Typography>
                    <Divider />
                    
                    <Typography style={descStyle}>
                    {Places.description}
                    </Typography>
                </CardContent>
                </div>
            </CardActionArea>
               
    </Card>
    {/* </Collapse> */}
    

            
        </div>
    )
}

export default Page1;