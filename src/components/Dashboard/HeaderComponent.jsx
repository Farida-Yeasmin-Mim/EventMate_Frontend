import { createTheme, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';
import React from 'react'
import SideNav from './SideNav';
import { BrowserRouter } from "react-router-dom";

export default function HearderComponent() {

  const theme = createTheme({
    status: {
      danger: orange[500],
    },
  });

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

  
      <ThemeProvider theme={theme}>
        <SideNav
          mobileOpen={mobileOpen}
          handleDrawerClose={handleDrawerClose}
          handleDrawerToggle={handleDrawerToggle}
        />

        <Box className={classes.wrapper}>
          <Routes>
            <Route exact path='/' render={() => <Dashboard />} />
            <Route exact path='/blog' render={() => <BlogPost />} />
            <Route exact path='/link1' render={() => <Link1 />} />
            <Route exact path='/notification' render={() => <Notification />} />
          </Routes>
        </Box>


      </ThemeProvider>

      </Fragment>



    </div>

  )
}

