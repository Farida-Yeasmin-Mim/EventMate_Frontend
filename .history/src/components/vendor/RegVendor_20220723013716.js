import * as React from 'react';
import { Grid, Paper, Avatar, Button, FormControlLabel, TextField, Link, Typography, Checkbox } from '@mui/material';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link as RLink } from "react-router-dom";


const RegVendor = () => {
    const avatarStyle = { backgroundColor: '#ef73ee' }
    const paperStyle = { padding: 40, height: '163vh', width: 400, margin: '20px auto' }  //creating paperstyle variable by using const
    const btnStyle = { margin: '20px 10px' }
    const [name, setName] = useState(" ");


    const [result, setResult] = useState(" ");
    const navigate = useNavigate();

    async function submit() {
        // console.warn(username, password)
        let item = {
            name: name,
            
        };
        console.log(localStorage.getItem('token'));

        axios.post('vendorstore', item)
            .then((response) => {
                setResult(response.data)
                console.log(result.data);
                navigate('/feed'); 
            })
            .catch(error => {
                //this.setResult({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockResetOutlinedIcon /></Avatar>
                    <h2>Registration Form</h2>
                    <p>Please fill in this form to create an account</p>
                </Grid>


                <TextField id='standard-basic' label='Name' variant='standard' fullWidth required /><br/><br/>
                <TextField id='standard-basic' label='Email' variant='standard' fullWidth /><br/><br/>
                <TextField id='standard-basic' label='Address' variant='standard' fullWidth  /><br/><br/>
                <TextField id='standard-basic' label='Contact No.' variant='standard' type='contact' fullWidth  /><br/><br/>
                <TextField id='standard-basic' label='Licence No.' variant='standard' fullWidth/><br/><br/>
                <TextField id='standard-basic' label='Whatsapp No.' variant='standard' fullWidth  /><br/><br/>
                <TextField id='standard-basic' label='Facebook link' variant='standard' fullWidth/><br/><br/>
                <TextField id='standard-basic' label='Linkedin link' variant='standard' fullWidth/><br/><br/>
                <TextField id='standard-basic' label='Instagram link' variant='standard' fullWidth /><br/><br/>
                <TextField id='standard-basic' label='Youtube link' variant='standard' fullWidth/><br/><br/>
                

                <br />
                <br />


                {/* <Button onClick={submit} type='submit' variant="contained" style={btnStyle} fullWidth>Submit</Button> */}
                <RLink to="/vendor_dashboard" style={{ textDecoration: 'none' }}><Button variant="contained">Submit</Button></RLink>


            </Paper>
        </Grid>

    )
}
export default RegVendor;