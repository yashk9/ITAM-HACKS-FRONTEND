
import './App.css';

import Login from './components/Pages/login';
import Home from './components/Pages/Home';
import Staff from './components/Pages/Staff';
import Signup from './components/Pages/signup';
import {  Route, Routes  } from 'react-router-dom';
import backimage from './components/Pages/backgrIm.jpg';
import ErrorPage from './components/Pages/ErrorPage'




import Alloptions from './components/Pages/Alloptions';
import InventoryLandingPage from './components/Inventory/InventoryLandingPage'
import ReceptionLandingPage from './components/Reception Pages/ReceptionLandingPage';
import HardwareLandingPage from './components/HAM Pages/HardwareLandingPage';
import SoftwareLandingPage from './components/SAM Pages/SoftwareLandingPage';
import ServiceLandingPage from './components/ITSM Pages/ServiceLandingPage';
import CertificateLandingPage from './components/Landing Pages/CertificateLandingPage';
import CmdbLandingPg from './components/Landing Pages/CmdbLandingPg';
import ItomLandingPg from './components/Landing Pages/ItomLandingPg';
import FinopsLandPg from './components/Landing Pages/FinopsLandPg';

import ITAssetsPg from './components/Inventory/ITAssetsPg';
import CloudAssetsPg from './components/Inventory/CloudAssetsPg'

import DHwAccesories from './components/Inventory/IT Assets/Discovery Inv/DHwAccesories'
import DHwDesktops from './components/Inventory/IT Assets/Discovery Inv/DHwDesktops'
import DHwLaptops from './components/Inventory/IT Assets/Discovery Inv/DHwLaptops'
import DNetDev from './components/Inventory/IT Assets/Discovery Inv/DNetDev'
import DServers from './components/Inventory/IT Assets/Discovery Inv/DServers'
import DSoftwares from './components/Inventory/IT Assets/Discovery Inv/DSoftwares'
import DVirM from './components/Inventory/IT Assets/Discovery Inv/DVirM'

import PHwAccesories from './components/Inventory/IT Assets/Procurement Inv/PHwAccesories'
import PHwDesktops from './components/Inventory/IT Assets/Procurement Inv/PHwDesktops'
import PHwLaptops from './components/Inventory/IT Assets/Procurement Inv/PHwLaptops'
import PNetdev from './components/Inventory/IT Assets/Procurement Inv/PNetdev'
import PServers from './components/Inventory/IT Assets/Procurement Inv/PServers'
import PSoftwares from './components/Inventory/IT Assets/Procurement Inv/PSoftwares'
import PVirM from './components/Inventory/IT Assets/Procurement Inv/PVirM'

import InwardPg from './components/Reception Pages/InwardPg'
import OutwardPg from './components/Reception Pages/OutwardPg'

import HWMaint from './components/HAM Pages/HWMaint'
import HTLaptops from './components/HAM Pages/HWTypes/HTLaptops'
import HTTelevisions from './components/HAM Pages/HWTypes/HTTelevisions';
import HTDesktops from './components/HAM Pages/HWTypes/HTDesktops'
import HTDockStations from './components/HAM Pages/HWTypes/HTDockStations'
import HTHeadphones from './components/HAM Pages/HWTypes/HTHeadphones'
import HTKeyboards from './components/HAM Pages/HWTypes/HTKeyboards'
import HTMonitors from './components/HAM Pages/HWTypes/HTMonitors'
import HTMouse from './components/HAM Pages/HWTypes/HTMouse'
import HTServerPhysical from './components/HAM Pages/HWTypes/HTServerPhysical'
import HTServerVirtual from './components/HAM Pages/HWTypes/HTServerVirtual'

import LaptopInfoPage from './components/HAM Pages/HWTypes/HTLaptopsPages/LaptopInfoPage'


import SWDiscoveryPg from './components/SAM Pages/SWDiscoveryPg'
import SWEntitlePg from './components/SAM Pages/SWEntitlePg'


import IncidencePg from './components/ITSM Pages/IncidencePg'
import ServReqPg from './components/ITSM Pages/ServReqPg'
import ChngMngmtPg from './components/ITSM Pages/ChngMngmtPg'
import ProbMngmtPg from './components/ITSM Pages/ProbMngmtPg'

import NetIpAddressTable from './components/DB Tables/NetIpAddressTable'
import ComputerInfo from './components/DB Tables/ComputerInfo'
import CertificatesTable from './components/DB Tables/CertificatesTable'
import NetworkAdapterTable from './components/DB Tables/NetworkAdapterTable'
import HotfixTable from './components/DB Tables/HotfixTable'
import ProcessTable from './components/DB Tables/ProcessTable'
import ProcessorTable from './components/DB Tables/ProcessorTable'
import ProductTable from './components/DB Tables/ProductTable'
import ServicesTable from './components/DB Tables/ServicesTable'
import VolumeTable from './components/DB Tables/VolumeTable';



function App() {




  const backstyle = {backgroundImage: `url(${backimage})` ,
                        backgroundSize: "cover",
                        minHeight: '100vh',
                        backgroundRepeat:"no-repeat",
                        backgroundAttachment:"fixed" ,
                        display: "inherit",
                        justifyContent:"center",
                        alignItems:"center",
                        padding:"20px",
                        
                      } 

  return (
    <div style={backstyle}>
      
        <Routes> 
                <Route exact path="/" element={<Home />}> </Route>
                <Route path="/login" element={<Login />}> </Route>
                <Route path="/signup" element={ <Signup />}> </Route>
                <Route path="/staff" element={<Staff />}> </Route>
                <Route path="/page1" element={<Alloptions />}> </Route>
                <Route path="*" element={<ErrorPage />}> </Route>
                <Route path="/page1/invLandPage" element={<InventoryLandingPage />}> </Route>
                <Route path="/page1/recLandPage" element={<ReceptionLandingPage />}> </Route>
                <Route path="/page1/softLandPage" element={<SoftwareLandingPage />}> </Route>
                <Route path="/page1/hardLandPage" element={<HardwareLandingPage />}> </Route>
                <Route path="/page1/servLandPage" element={<ServiceLandingPage />}> </Route>
                <Route path="/page1/certLandPage" element={<CertificateLandingPage />}> </Route>
                <Route path="/page1/cmdbLandPage" element={<CmdbLandingPg />}> </Route>
                <Route path="/page1/itomLandPage" element={<ItomLandingPg />}> </Route>
                <Route path="/page1/finopLandPage" element={<FinopsLandPg />}> </Route>

                <Route path="/page1/invLandPage/itAssets" element={<ITAssetsPg />}> </Route>
                <Route path="/page1/invLandPage/cloudAssets" element={<CloudAssetsPg />}> </Route>

                <Route path="/page1/invLandPage/itAssets/dHwAcc" element={<DHwAccesories />}> </Route>
                <Route path="/page1/invLandPage/itAssets/dHwDes" element={<DHwDesktops />}> </Route>
                <Route path="/page1/invLandPage/itAssets/dHwLap" element={<DHwLaptops />}> </Route>
                <Route path="/page1/invLandPage/itAssets/dNet" element={<DNetDev />}> </Route>
                <Route path="/page1/invLandPage/itAssets/dSer" element={<DServers />}> </Route>
                <Route path="/page1/invLandPage/itAssets/dSof" element={<DSoftwares />}> </Route>
                <Route path="/page1/invLandPage/itAssets/dVir" element={<DVirM />}> </Route>

                <Route path="/page1/invLandPage/itAssets/pHwAcc" element={<PHwAccesories />}> </Route>
                <Route path="/page1/invLandPage/itAssets/pHwDes" element={<PHwDesktops />}> </Route>
                <Route path="/page1/invLandPage/itAssets/pHwLap" element={<PHwLaptops />}> </Route>
                <Route path="/page1/invLandPage/itAssets/pNet" element={<PNetdev />}> </Route>
                <Route path="/page1/invLandPage/itAssets/pSer" element={<PServers />}> </Route>
                <Route path="/page1/invLandPage/itAssets/pSof" element={<PSoftwares />}> </Route>
                <Route path="/page1/invLandPage/itAssets/pVir" element={<PVirM />}> </Route>

                <Route path="/page1/recLandPage/inPg" element={<InwardPg />}> </Route>
                <Route path="/page1/recLandPage/outPg" element={<OutwardPg />}> </Route>

                <Route path="/page1/hardLandPage/hwMaint" element={<HWMaint />}> </Route>
                <Route path="/page1/hardLandPage/hwTypes/laptops" element={<HTLaptops />}> </Route>
                <Route path="/page1/hardLandPage/hwTypes/desktops" element={<HTDesktops />}> </Route>
                <Route path="/page1/hardLandPage/hwTypes/monitors" element={<HTMonitors />}> </Route>
                <Route path="/page1/hardLandPage/hwTypes/headphones" element={<HTHeadphones />}> </Route>
                <Route path="/page1/hardLandPage/hwTypes/dockstation" element={<HTDockStations />}> </Route>
                <Route path="/page1/hardLandPage/hwTypes/keyboards" element={<HTKeyboards />}> </Route>
                <Route path="/page1/hardLandPage/hwTypes/mouse" element={<HTMouse />}> </Route>
                <Route path="/page1/hardLandPage/hwTypes/televisions" element={<HTTelevisions />}> </Route>
                <Route path="/page1/hardLandPage/hwTypes/server/physical" element={<HTServerPhysical />}> </Route>
                <Route path="/page1/hardLandPage/hwTypes/server/virtual" element={<HTServerVirtual />}> </Route>

                <Route path="/page1/hardLandPage/hwTypes/laptops/info" element={<LaptopInfoPage />}> </Route>

                <Route path="/page1/softLandPage/DiscoveryPg" element={<SWDiscoveryPg />}> </Route>
                <Route path="/page1/softLandPage/EntitlePg" element={<SWEntitlePg />}> </Route>

                <Route path="/page1/servLandPage/incPg" element={<IncidencePg />}> </Route>
                <Route path="/page1/servLandPage/servReqPg" element={<ServReqPg />}> </Route>
                <Route path="/page1/servLandPage/chngMngmtPg" element={<ChngMngmtPg />}> </Route>
                <Route path="/page1/servLandPage/probMngmtPg" element={<ProbMngmtPg />}> </Route>

                <Route path='/page1/dbTables/netipTable' element={<NetIpAddressTable />}> </Route>
                <Route path='/page1/dbTables/compInfo' element={<ComputerInfo />}> </Route>
                <Route path='/page1/dbTables/certTable' element={<CertificatesTable />}> </Route>
                <Route path='/page1/dbTables/netAdapTable' element={<NetworkAdapterTable />}> </Route>
                <Route path='/page1/dbTables/hotfixTable' element={<HotfixTable />}> </Route>
                <Route path='/page1/dbTables/processTable' element={<ProcessTable />}> </Route>
                <Route path='/page1/dbTables/processorTable' element={<ProcessorTable />}> </Route>
                <Route path='/page1/dbTables/productTable' element={<ProductTable />}> </Route>
                <Route path='/page1/dbTables/servicesTable' element={<ServicesTable />}> </Route>
                <Route path='/page1/dbTables/volumeTable' element={<VolumeTable />}> </Route>

          </Routes>
          </div>
        
    
    
    
  );
}

export default App;
