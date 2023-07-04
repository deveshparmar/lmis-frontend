
import BasicTabs from "./TabPanel";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar'

const NewPatientPage = () =>{
    const location = useLocation();

    useEffect(() => {
      if (location.pathname === '/new-patient') {
        // Perform your desired logic here
        console.log('URL changed to /new-patient');
      }
    }, [location.pathname]);
    return(
        <>
            <ResponsiveAppBar />
            <center><h1>New Patient Registration</h1></center>
            <BasicTabs/>
        </>
    )
}

export default NewPatientPage;