import * as React from 'react';
import { Grid, Paper, Avatar, Button, FormControlLabel, TextField, Link, Typography, Checkbox, List } from '@mui/material';
import SelectAreas from '../../components/seletionTextField/SelectAreas';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CartState } from '../context/Context';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



const Payment = () => {
    const avatarStyle = { backgroundColor: '#ef73ee' }
    const paperStyle = { padding: 40, height: '175vh', width: 420, margin: '20px auto' }  //creating paperstyle variable by using const
    const btnStyle = { margin: '20px 10px' }
    const { state: { products, cart } } = CartState();
    let total = 0;
    function getTotal() {
        cart.map((product, index) => (
            total = total + product.price
        ))
    };

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
                                <ListItemText primary={product.price} />
                            </ListItem>
                            <Divider />

                        </>
                    ))}
                </List>

                <p>Total: {total}</p><br />
                <p>Pay 25% hence tk<b>{total * .25}</b> by bKash in <b>01752222222</b></p>
                <TextField
                    id='location'
                    label='bKash transition ID'
                    name="location"
                    variant='standard'
                    fullWidth

                /><br /><br />

            </Paper>
        </Grid>

    )
}
export default Payment;