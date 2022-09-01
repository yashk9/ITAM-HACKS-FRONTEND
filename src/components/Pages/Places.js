//import BackImage from "./backgrIm"

const Places = [
    {
        Pid: "img1",
        title: ' Inventory',
        description:"Central repository of Assets (IT & Non-IT)",
        landingPage: "/page1/invLandPage",
        imageUrl: process.env.PUBLIC_URL + "/AllOption Images/inventory.png",
        altimgUrl:process.env.PUBLIC_URL + "/AllOption Images/Altinventory.png"
        
    },

    {
        Pid: "img2",
        title: ' Reception',
        description:"Gateway through and from the company",
        landingPage: "/page1/recLandPage",
        imageUrl: process.env.PUBLIC_URL + "/AllOption Images/reception.png",
        altimgUrl:process.env.PUBLIC_URL + "/AllOption Images/AltReception.png"
        
    },

    {
        Pid: "img3",
        title: 'HAM',
        description:"Hardware Asset Management",
        landingPage: "/page1/hardLandPage",
        imageUrl: process.env.PUBLIC_URL + "/AllOption Images/hardware.png",
        altimgUrl:process.env.PUBLIC_URL + "/AllOption Images/AltHardware.png"
        
    },

    {
        Pid: "img4",
        title: 'SAM',
        description:"Software Asset Management",
        landingPage: "/page1/softLandPage",
        imageUrl: process.env.PUBLIC_URL + "/AllOption Images/software.png",
        altimgUrl:process.env.PUBLIC_URL + "/AllOption Images/AltSoftware.png"
        
    },

    {
        Pid: "img5",
        title: 'ITSM',
        description:"IT Service Management",
        landingPage: "/page1/servLandPage",
        imageUrl: process.env.PUBLIC_URL + "/AllOption Images/service.png",
        altimgUrl:process.env.PUBLIC_URL + "/AllOption Images/AltService.png"
        
    },

    {
        Pid: "img6",
        title: 'CM',
        description:"Certificate Management",
        landingPage: "/page1/dbTables/certTable",
        imageUrl: process.env.PUBLIC_URL + "/AllOption Images/certificate.png",
        altimgUrl:process.env.PUBLIC_URL + "/AllOption Images/AltCertificate.png"
        
    },

    {
        Pid: "img7",
        title: 'CMDB',
        description:"Configuration Management Database",
        landingPage: "/page1/cmdbLandPage",
        imageUrl: process.env.PUBLIC_URL + "/AllOption Images/cmdb.png",
        altimgUrl:process.env.PUBLIC_URL + "/AllOption Images/AltCmdb.png"
        
    },

    {
        Pid: "img8",
        title: 'ITOM',
        description:"IT Operations Management",
        landingPage: "/page1/itomLandPage",
        imageUrl: process.env.PUBLIC_URL + "/AllOption Images/operations.png",
        altimgUrl:process.env.PUBLIC_URL + "/AllOption Images/AltItom.png"
        
    },

    {
        Pid: "img9",
        title: 'ITAM + FIN-Ops',
        description:"Integrated ITAM and FIN-Ops (Finance+DevOps)",
        landingPage: "/page1/finopLandPage",
        imageUrl: process.env.PUBLIC_URL + "/AllOption Images/Finops.png",
        altimgUrl:process.env.PUBLIC_URL + "/AllOption Images/AltFinops.png"
        
    },
];

export default Places;
