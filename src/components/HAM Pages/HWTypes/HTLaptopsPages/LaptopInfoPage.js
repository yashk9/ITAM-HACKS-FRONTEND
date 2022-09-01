import { Accordion, AccordionDetails, AccordionSummary, Divider, Paper, Typography, Grid, Box,  } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import NavBar from '../../../Landing Pages/NavBar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DataGrid} from '@mui/x-data-grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function createData(name, indent, value) {
    return { name, indent,value };
  }
  


function LaptopInfoPage() {
    
    

    const location = useLocation();
    const mainPaperStyle= {  padding:"20px", marginLeft:"50px", marginRight:"50px",marginTop:"10vh"  }
    const paperStyle={ padding:"20px", marginLeft:"50px", marginRight:"50px", marginTop:"20px" }
    const accSumStyle = { justifyContent:"center", backgroundColor:"whitesmoke"}
    const typoStyle={ fontWeight:"600", fontFamily:"Nunito" , fontSize:"2rem", fontVariant:"all-small-caps"}
    const accTypoStyle={ fontWeight:"600", fontFamily:"Nunito" , fontSize:"1.5rem", fontVariant:"all-small-caps"}
    const headStyle={fontSize:"3.2rem", textAlign:"center",fontVariant:"all-small-caps", textDecorationLine:"underline", fontFamily:"Nunito", textDecorationColor:"rgb(0 0 0 / 34%)"}
    const detailStyle={ backgroundColor:"whitesmoke"}

    
    const[compInfo,setCompInfo]=useState([])

    useEffect( ()=> {
        
        fetch(`http://localhost:8080/compInfo/get/${location.state.bio}`)
        .then(res=>res.json())
        .then((result)=>{
            setCompInfo(result);
        })
        
      //eslint-disable-next-line react-hooks/exhaustive-deps  
    },[])

    const row_compInfo_Windows = [
        createData('Current Version', ":", (compInfo.windowsCurrentVersion)),
        createData('Edition Id', ":", (compInfo.windowsEditionId)),
        createData('Installation Type', ":", (compInfo.windowsInstallationType)),
        createData('Install Date From Registry', ":", (compInfo.windowsInstallDateFromRegistry)),
        createData('Product Id', ":", (compInfo.windowsProductId)),
        createData('Registered Organisation', ":", (compInfo.windowsRegisteredOrganization)),
        createData('Version', ":", (compInfo.windowsVersion)),
        
      ]

    const row_compInfo_Others = [
        createData('DNS HostName', ":", (compInfo.csDNSHostName)),
        createData('Domain', ":", (compInfo.csDomain)),
        createData('Domain Role', ":", (compInfo.csDomainRole)),
        createData('Manufacturer', ":", (compInfo.csManufacturer)),
        createData('Model', ":", (compInfo.csModel)),
        createData('Name', ":", (compInfo.csName)),
        createData('Number of Logical Processors', ":", (compInfo.csNumberOfLogicalProcessors)),
        createData('Number of Processors', ":", (compInfo.csNumberOfProcessors)),
        createData('Processors', ":", (compInfo.csProcessors)),
        createData('Primary Owner Name', ":", (compInfo.csPrimaryOwnerName)),
        createData('System Family', ":", (compInfo.csSystemFamily)),
        createData('System SKU Number', ":", (compInfo.csSystemSKUNumber)),
        createData('System Type', ":", (compInfo.csSystemType)),
        createData('Total Physical Memory', ":", (compInfo.csTotalPhysicalMemory)),
        createData('Physically Installed Memory', ":", (compInfo.csPhysicallyInstalledMemory)),
        createData('UserName', ":", (compInfo.csUserName)),
        createData('Timezone', ":", (compInfo.timeZone)),
        createData('Logon Sever', ":", (compInfo.logonServer)),
        createData('HyperVisor Present', ":", (compInfo.hyperVisorPresent)),
      ]

      const row_compInfo_OS = [
        createData('Name', ":", (compInfo.osName)),
        createData('Operating System SKU', ":", (compInfo.osOperationgSystemSKU)),
        createData('Version', ":", (compInfo.osVersion)),
        createData('Build Number', ":", (compInfo.osBuildNumber)),
        createData('Last Boot Up Time', ":", (compInfo.osLastBootUpTime)),
        createData('Up Time', ":", (compInfo.osUptime)),
        createData('Build Type', ":", (compInfo.osBuildType)),
        createData('Total Visible Memory Size', ":", (compInfo.osTotalVisibleMemorySize)),
        createData('Free Physical Memory', ":", (compInfo.osFreePhysicalMemory)),
        createData('Total Virtual Memory Size', ":", (compInfo.osTotalVirtualMemorySize)),
        createData('Free Virtual Memory', ":", (compInfo.osFreeVirtualMemory)),
        createData('In Use Virtual Memory', ":", (compInfo.osInUseVirtualMemory)),
        createData('Install Date', ":", (compInfo.osInstallDate)),
        createData('Manufacturer', ":", (compInfo.osManufacturer)),
        createData('Architecture', ":", (compInfo.osArchitecture)),
        createData('Product Type', ":", (compInfo.osProductType)),
        createData('Serial Number', ":", (compInfo.osSerialNumber)),

      ]

      const row_compInfo_Bios = [
        createData('BIOS Version', ":", (compInfo.biosBIOSVersion)),
        createData('Manufacturer', ":", (compInfo.biosManufacturer)),
        createData('Name', ":", (compInfo.biosName)),
        createData('Release Date', ":", (compInfo.biosReleaseDate)),
        createData('Serial Number', ":", (compInfo.biosSeralNumber)),
        createData('Status', ":", (compInfo.biosStatus)),
      ]

    const[procInfo,setProcInfo]=useState([])
    useEffect( ()=>{
        fetch(`http://localhost:8080/processorTable/get/${location.state.bio}`)
        .then(res=>res.json())
        .then((result)=>{
            setProcInfo(result);
        })
        
      //eslint-disable-next-line react-hooks/exhaustive-deps  
    },[])

    const row_processor = [
        createData('Device ID', ":", (procInfo.deviceID)),
        createData('Manufacturer', ":", (procInfo.manufacturer)),
        createData('Max Clock Speed', ":", (procInfo.maxClockSpeed)),
        createData('Name', ":", (procInfo.name)),
        
      ]

    const[netipAtr,setNetipAtr]=useState([])

    useEffect( ()=> {
        fetch(`http://localhost:8080/netip/get/${location.state.bio}`)
        .then(res=>res.json())
        .then((result)=>{
            setNetipAtr(result);
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps 
    },[])

    const columns_netip = [
        {field: 'id' , hide:true},
        { field: 'ipaddress', headerName: 'IP Address', width: 400 },
        { field: 'interfaceAlias', headerName: 'Interface Alias', width: 250 },
        { field: 'addressFamily', headerName: 'Address Family', width: 250 },
        ]

    const rows_netip = netipAtr.map( vals => (
        {
            id:vals.id,
         ipaddress: vals.ipaddress, 
         interfaceAlias: vals.interfaceAlias,
         addressFamily: vals.addressFamily,    
        
        }
    ))
    
    const[netAdapAtr,setNetAdapAtr]=useState([])

    useEffect( ()=> {
        fetch(`http://localhost:8080/netAdapter/get/${location.state.bio}`)
        .then(res=>res.json())
        .then((result)=>{
            setNetAdapAtr(result);
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps 
    },[])

    
    const columns_na = [
        { field: 'id', hide:true },
        { field: 'macAddress', headerName: 'MAC Address', width: 500 },
        { field: 'description', headerName: 'Description', width:500 },
        { field: 'biosSeralNumber', hide:true },
    ]

    const rows_na = netAdapAtr.map( vals => (
          {id: vals.id , 
            macAddress: vals.macAddress,
            description: vals.description,
            biosSeralNumber: vals.biosSeralNumber,
          }
      ))

    const[volAtr,setVolAtr]=useState([])

    useEffect( ()=> {
        fetch(`http://localhost:8080/volumeTable/get/${location.state.bio}`)
        .then(res=>res.json())
        .then((result)=>{
            setVolAtr(result);
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps 
    },[])

    const columns_vol = [
        { field: 'id', hide:true },
        { field: 'driveLetter', headerName: 'Drive Letter', width: 200 },
        { field: 'friendlyName', headerName: 'Friendly Name', width: 200 },
        { field: 'fileSystemType', headerName: 'File System Type', width: 200 },
        { field: 'driveType', headerName: 'Drive Type', width: 200 },
        { field: 'healthStatus', headerName: 'Health Status', width: 200 },
        { field: 'operationalStatus', headerName: 'Operational Status', width: 300 },
        { field: 'sizeRemaining', headerName: 'Size Remaining', width: 200 },
        { field: 'size', headerName: 'Size', width: 200 },
        { field: 'biosSeralNumber', hide:true },
    ]

    const rows_vol = volAtr.map( value => (
          {id: value.id , 
            driveLetter: value.driveLetter,
            friendlyName: value.friendlyName,
            fileSystemType: value.fileSystemType,
            driveType: value.driveType,
            healthStatus: value.healthStatus,
            operationalStatus: value.operationalStatus,
            sizeRemaining: value.sizeRemaining,
            size: value.size,
            biosSeralNumber: value.biosSeralNumber,
          }
      ))
    
    

  return (
    
    <div>
        <div>
            <NavBar />
        </div>
        <div>
            <Grid container sx={{marginTop:"10vh"}}>
                
                <Grid item xs={12} >
                    <Typography style={headStyle}> Laptop Details </Typography>
                </Grid>
                <Grid item xs={12}>
                    <br></br>
                    <br></br>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
            <Paper style={mainPaperStyle}>
                <Accordion sx={{padding:"0px"}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        style={accSumStyle}>
                        
                        <Typography style={typoStyle}>General Info</Typography>
                        
                    </AccordionSummary>
                    <AccordionDetails style={detailStyle}>
                        <Divider />
                        <Paper>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} style={accTypoStyle}>
                                    Windows
                                    
                                </AccordionSummary>
                                <AccordionDetails>
                                <Divider />
                                    

                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead />
                                            <TableBody>
                                                {row_compInfo_Windows.map((row) => (
                                                    <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                    <TableCell component="th" scope="row" sx={{fontStyle:"italic", fontWeight:"bold", textDecorationLine:"underline"}}>
                                                        {row.name}
                                                    </TableCell>
                                            
                                                    <TableCell align="center">{row.indent}</TableCell>
                                                    <TableCell align="right" sx={{fontFamily:"Nunito"}}>{ !row.value ? (<div>--NA--</div>) : (row.value)}</TableCell>
                                                    
                                                    </TableRow>
                                                ))}
                                                </TableBody>
                                        </Table>
                                    </TableContainer>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} style={accTypoStyle}>
                                    BIOS 
                                  
                                </AccordionSummary>
                                <AccordionDetails>
                                <Divider />
                                    
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead />
                                            <TableBody>
                                                {row_compInfo_Bios.map((rowlls) => (
                                                    <TableRow
                                                    key={rowlls.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                    <TableCell component="th" scope="row" sx={{fontStyle:"italic", fontWeight:"bold", textDecorationLine:"underline"}}>
                                                        {rowlls.name}
                                                    </TableCell>
                                            
                                                    <TableCell align="center">{rowlls.indent}</TableCell>
                                                    <TableCell align="right" sx={{fontFamily:"Nunito"}}>{ !rowlls.value ? (<div>--NA--</div>) : (rowlls.value)}</TableCell>
                                                    
                                                    </TableRow>
                                                ))}
                                                </TableBody>
                                        </Table>
                                    </TableContainer>
                                   
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} style={accTypoStyle}>
                                    Operating System
                                    
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Divider />
                                    

                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                <TableHead />
                                                <TableBody>
                                                    {row_compInfo_OS.map((rowlls) => (
                                                        <TableRow
                                                        key={rowlls.name}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                        <TableCell component="th" scope="row" sx={{fontStyle:"italic", fontWeight:"bold", textDecorationLine:"underline"}}>
                                                            {rowlls.name}
                                                        </TableCell>
                                                
                                                        <TableCell align="center">{rowlls.indent}</TableCell>
                                                        <TableCell align="right" sx={{fontFamily:"Nunito"}}>{ !rowlls.value ? (<div>--NA--</div>) : (rowlls.value)}</TableCell>
                                                        
                                                        </TableRow>
                                                    ))}
                                                    </TableBody>
                                            </Table>
                                        </TableContainer>
                                    
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} style={accTypoStyle}>
                                    Others
                                </AccordionSummary>
                                <AccordionDetails>
                                    

                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead />
                                            <TableBody>
                                                {row_compInfo_Others.map((rowlls) => (
                                                    <TableRow
                                                    key={rowlls.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                    <TableCell component="th" scope="row" sx={{fontStyle:"italic", fontWeight:"bold", textDecorationLine:"underline"}}>
                                                        {rowlls.name}
                                                    </TableCell>
                                            
                                                    <TableCell align="center">{rowlls.indent}</TableCell>
                                                    <TableCell align="right" sx={{fontFamily:"Nunito"}}>{ !rowlls.value ? (<div>--NA--</div>) : (rowlls.value)}</TableCell>
                                                    
                                                    </TableRow>
                                                ))}
                                                </TableBody>
                                        </Table>
                                    </TableContainer>
                                     
                                </AccordionDetails>
                            </Accordion>
                            <Divider />
                        </Paper>
                    </AccordionDetails>
                </Accordion>
            </Paper>


            <Paper style={paperStyle}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        style={accSumStyle}>
                        
                        <Typography style={typoStyle}>Processor</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={detailStyle}>
                        

                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead />
                                            <TableBody>
                                                {row_processor.map((rowlls) => (
                                                    <TableRow
                                                    key={rowlls.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                    <TableCell component="th" scope="row" sx={{fontStyle:"italic", fontWeight:"bold", textDecorationLine:"underline"}}>
                                                        {rowlls.name}
                                                    </TableCell>
                                            
                                                    <TableCell align="center">{rowlls.indent}</TableCell>
                                                    <TableCell align="right" sx={{fontFamily:"Nunito"}}>{ !rowlls.value ? (<div>--NA--</div>) : (rowlls.value)}</TableCell>
                                                    
                                                    </TableRow>
                                                ))}
                                                </TableBody>
                                        </Table>
                                    </TableContainer>

                    </AccordionDetails>
                </Accordion>
            </Paper>


            <Paper style={paperStyle}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        style={accSumStyle}>
                        
                        <Typography style={typoStyle}>Network Info</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={detailStyle}>
                    <Paper elevation={0} sx={{padding:"8px 16px 16px"}}>
                        <Box sx={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    columns={columns_netip}
                                    rows={rows_netip}
                                    
                                    disableColumnMenu
                                    pageSize={3}
                                    rowsPerPageOptions={[3]}
                                    showCellRightBorder
                                    showColumnRightBorder
                                    disableSelectionOnClick
                                    sx={{ '& .MuiDataGrid-columnHeaderTitle':{
                                                        fontWeight:"bold",
                                                        fontFamily:"Nunito",
                                                        fontVariant:"all-small-caps",
                                                        fontSize:"large",
                                                        textDecoration:"underline",},
                                            '& .MuiDataGrid-columnSeparator':{
                                                        color:"black"
                                        },
                                        }}
                                    />

                                </Box>
                            
                            </Paper>
                    </AccordionDetails>
                </Accordion>
            </Paper>

            <Paper style={paperStyle}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        style={accSumStyle}>
                        
                        <Typography style={typoStyle}>Network Adapters</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={detailStyle}>
                        <Paper>
                        <Box sx={{ height: 400, width: '100%' }}>
                            <DataGrid
                                columns={columns_na}
                                rows={rows_na}
                                
                                disableColumnMenu
                                pageSize={3}
                                rowsPerPageOptions={[3]}
                                showCellRightBorder
                                showColumnRightBorder
                                disableSelectionOnClick
                                sx={{ '& .MuiDataGrid-columnHeaderTitle':{
                                                fontWeight:"bold",
                                                fontFamily:"Nunito",
                                                fontVariant:"all-small-caps",
                                                fontSize:"large",
                                                textDecoration:"underline",},
                                     '& .MuiDataGrid-columnSeparator':{
                                                color:"black"
                                    },
                                    }}
                                />

                            </Box>
                        </Paper>    
                    </AccordionDetails>
                </Accordion>
            </Paper>

            <Paper style={paperStyle}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        style={accSumStyle}>
                        
                        <Typography style={typoStyle}>Volume Info</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={detailStyle}>
                        
                        <Paper>
                            <Box sx={{ height: 400, width: '100%' }}>
                            <DataGrid
                                columns={columns_vol}
                                rows={rows_vol}
                                
                                disableColumnMenu
                                pageSize={3}
                                rowsPerPageOptions={[3]}
                                showCellRightBorder
                                showColumnRightBorder
                                disableSelectionOnClick
                                sx={{ '& .MuiDataGrid-columnHeaderTitle':{
                                                fontWeight:"bold",
                                                fontFamily:"Nunito",
                                                fontVariant:"all-small-caps",
                                                fontSize:"large",
                                                textDecoration:"underline",},
                                        '& .MuiDataGrid-columnSeparator':{
                                                color:"black"
                                    },
                                    }}
                                />

                            </Box>

                        </Paper>    
                    </AccordionDetails>
                </Accordion>
            </Paper>
            

            




            </Grid>
            </Grid>
        </div>
        
        
        
        
    </div>
  )
}

export default LaptopInfoPage