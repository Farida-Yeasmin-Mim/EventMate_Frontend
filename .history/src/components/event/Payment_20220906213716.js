import * as React from 'react';
import { Grid, Paper, Avatar, Button, FormControlLabel, TextField, Link, Typography, Checkbox } from '@mui/material';
import SelectAreas from '../../components/seletionTextField/SelectAreas';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import { Link as RLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Payment = () => {
    const avatarStyle = { backgroundColor: '#ef73ee' }
    const paperStyle = { padding: 40, height: '175vh', width: 420, margin: '20px auto' }  //creating paperstyle variable by using const
    const btnStyle = { margin: '20px 10px' }

    return (

        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><FilterVintageTwoToneIcon /></Avatar>
                    <h2>Add Your Desire Decorations</h2>
                    <p>Please fill in this form to add decoration services</p>
                </Grid> <br />



            </Paper>
        </Grid>

    )
}
export default Payment;