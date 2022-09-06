import * as React from 'react';
import { Grid, Paper, Avatar, Button, FormControlLabel, TextField, Link, Typography, Checkbox } from '@mui/material';
import SelectAreas from '../../components/seletionTextField/SelectAreas';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { CartState } from '../../context/Context';



const Payment = () => {
    const avatarStyle = { backgroundColor: '#ef73ee' }
    const paperStyle = { padding: 40, height: '175vh', width: 420, margin: '20px auto' }  //creating paperstyle variable by using const
    const btnStyle = { margin: '20px 10px' }
    const { state: { products, cart } } = CartState();

    return (

        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Confirm Order</h2>
                    <p>Please confirm your order by paying advance</p>
                </Grid> <br />
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



            </Paper>
        </Grid>

    )
}
export default Payment;