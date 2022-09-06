import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { CartState } from '../../context/Context';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link } from "react-router-dom";


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { state: { products, cart } } = CartState();


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {cart.map((product, index) => (
          <>
            <ListItem key={product.id} >


              <ListItemText primary={product.title} secondary={product.category} />
              <Link style={{ textDecoration: 'none', color: 'rgb(36, 87, 255)' }} to={"/decoration_details/" + product.id}><b>VIEW</b></Link>

            </ListItem>
            <Divider />
          </>
        ))}
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
      <List>

        <ListItem disablePadding>
          <ListItemIcon>
            <LocalAtmIcon />
          </ListItemIcon>
          <ListItemText primary="Totel Budget: 5000tk" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <PriceChangeIcon />
          </ListItemIcon>
          <ListItemText primary="Budget left: 2345tk" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText primary="Person Number: 10" />
        </ListItem>
      </List>
      <br /><br /><br /><br /><br />
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor} {cart.length}</Button> */}
          <Button
            variant='outlined'
            color='primary'
            onClick={toggleDrawer(anchor, true)}>Selected Services ({cart.length})</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            {
              (cart.length == 0) ?
                (<div style={{ margin: '50px' }}>
                  <Button
                    variant="contained"
                    disabled
                  >
                    <Link style={{ textDecoration: 'none' }} to={"/decoration_details/"}>Place Order</Link>

                  </Button>
                </div>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                  >
                    Place Order
                  </Button>
                )
            }
          </Drawer>
        </React.Fragment>
      ))
      }
    </div >
  );
}
