import React, { Fragment } from 'react'
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './BodyComponent/Dashboard/Dashboard';
import Link from './BodyComponent/Dashboard/Link';
import SideNav from './SideNav';
// import { BrowserRouter } from "react-router-dom";
import Logout from '../../pages/auth/Logout';
import Notification from './BodyComponent/Dashboard/Notification';
import { useStyles } from './HeaderStyle';



export default function HearderComponent() {

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log("Jai siya ram");
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
    console.log("prem se bolo Jai siya ram");
  };



  return (
    <div>
      <Fragment>

          <SideNav
            mobileOpen={mobileOpen}
            handleDrawerClose={handleDrawerClose}
            handleDrawerToggle={handleDrawerToggle}
          />

          <Box className={classes.wrapper}>
            <Routes>
              {/* <Route path="/login" element={<Login />} /> */}
            
              <Route path='/dashboard'  element= {<Dashboard />} />
              <Route path='/link' element= {<Link />} />
              <Route path='/notification' element={ <Notification />} />
              <Route path='/logout' element={ <Logout />} />
              

            </Routes>
          </Box>

      </Fragment>



    </div>

  )
}

