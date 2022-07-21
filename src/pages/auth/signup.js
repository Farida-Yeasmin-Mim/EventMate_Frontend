import * as React from 'react';
import { Grid, Paper, Avatar, TextField, Link, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SelectGender from '../../components/seletionTextField/selectGender';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// import Stack from "@mui/material/Stack";
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';



const Signup = () => {
    const avatarStyle = { backgroundColor: '#cf88ce' }
    const paperStyle = { padding: 40, height: '150vh', width: 400, margin: '20px auto' }  //creating paperstyle variable by using const
    const btnStyle = { margin: '20px 10px' }

    const [name, setName]= useState(" ");
    const [email, setEmail]= useState(" ");
    const [password, setPassword]= useState(" ");
    const [result, setResult]= useState(" "); 
    const navigate = useNavigate();


    async function signup(){
        // console.warn(username, password)
        let item = {
            name: name, 
            email: email
        };

        const headers = { 
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        
        // axios.post('https://guarded-beach-16980.herokuapp.com/api/login', item,  {headers})
        axios.post('http://127.0.0.1:8000/api/login',item, {headers})
            .then(response => setResult({ info: response.data}))
            .catch(error => {
                //this.setResult({ errorMessage: error.message });
                console.error('There was an error!', error);
        });
        // history.push("/add")  
        console.log(result.info.data);
        localStorage.setItem("user-info", result.info)

    }




    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign Up</h2>
                    <p>Please fill in this form to create an account</p>
                </Grid>

                <TextField id='standard-basic' label='Name' name="name" variant='standard' fullWidth required /><br/><br/>
                <TextField id='standard-basic' label='Email' name="email" variant='standard' fullWidth required /><br/><br/>
                <TextField id='standard-basic' label='Address' variant='standard' fullWidth required /><br/><br/>
                <TextField id='standard-basic' label='Date of Birth' variant='standard' fullWidth/><br/><br/>
                <TextField id='standard-basic' label='Contact No.' variant='standard' type='contact' fullWidth required /><br/><br/>
                <TextField id='standard-basic' label='NID No.' variant='standard' fullWidth/><br/><br/>
                <SelectGender/>
                <TextField id='standard-basic' label='Password' variant='standard' type='password' fullWidth required /><br/><br/>
                <TextField id='standard-basic' label='Confirm Password' variant='standard' type='password' fullWidth required />


                <br />
                <br />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="I accept all the Terms of Use and Privacy Policy"
                />

                <Button type='submit' variant="contained" style={btnStyle} fullWidth>Sign Up</Button>


                <Typography>Already a Member?
                    <Link href="#">Log In</Link>
                </Typography>

            </Paper>
        </Grid>



    )
}
export default Signup;