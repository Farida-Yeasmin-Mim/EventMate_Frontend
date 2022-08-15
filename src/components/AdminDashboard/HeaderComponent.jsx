import React, { Fragment } from 'react'
import { Box} from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Link from './BodyComponent/Dashboard/Link';
import SideNav from './SideNav';
import Logout from '../../pages/auth/Logout';
import Notification from './BodyComponent/Dashboard/Notification';
import { useStyles } from './HeaderStyle';
import Dashboard from './BodyComponent/Dashboard/Dashboard';



export default function HearderComponent() {

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log("Shut up");
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
    console.log("prem se bolo shut up");
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
              <Route path='/dashboards'  element= {<Dashboard/>} />
              <Route path='/link' element= {<Link />} />
              <Route path='/notification' element={ <Notification />} />
              <Route path='/logout' element={ <Logout />} />
            </Routes>
          </Box>

      </Fragment>

    </div>

  )
}

