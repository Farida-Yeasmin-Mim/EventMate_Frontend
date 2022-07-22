import * as React from 'react';
import { Grid, Paper, Avatar, TextField, Link, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SelectGender from '../../components/seletionTextField/selectGender';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
    const avatarStyle = { backgroundColor: '#cf88ce' }
    const paperStyle = { padding: 40, height: '150vh', width: 400, margin: '20px auto' }  //creating paperstyle variable by using const
    const btnStyle = { margin: '20px 10px' }

    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [address, setAddress] = useState(" ");
    const [doB, setDoB] = useState(" ");
    const [contact, setContact] = useState(" ");
    const [nid, setNid] = useState(" ");
    const [gender, setGender] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [confirmpassword, setConfirmPassword] = useState(" ");

    const [result, setResult] = useState(" ");
    const navigate = useNavigate();


    async function signup() {
        // console.warn(username, password)
        let item = {
            name: name,
            email: email,
            address: address,
            doB: doB,
            contact: contact,
            nid: nid,
            gender: gender,
            password: password,
            confirmpassword: confirmpassword
        };

        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        // axios.post('https://guarded-beach-16980.herokuapp.com/api/login', item,  {headers})
        axios.post('http://127.0.0.1:8000/api/signup', item, { headers })
            .then(response => setResult({ info: response.data }))
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

                <TextField
                    id='name'
                    label='Name'
                    name="name"
                    variant='standard'
                    fullWidth
                    required
                    onChange={(e)=>setName(e.target.value)}
                /><br /><br />


                <TextField
                    id='email'
                    label='Email'
                    name="email"
                    variant='standard'
                    fullWidth
                    required 
                    onChange={(e)=>setEmail(e.target.value)}
                    /><br /><br />

                <TextField
                    id='address'
                    label='Address'
                    name="address"
                    variant='standard'
                    fullWidth
                    required 
                    onChange={(e)=>setAddress(e.target.value)}
                    /><br /><br />

                <TextField
                    id='doB'
                    label='Date of Birth'
                    name="doB"
                    variant='standard'
                    fullWidth 
                    onChange={(e)=>setDoB(e.target.value)}
                    /><br /><br />

                <TextField
                    id='contact'
                    label='Contact No.'
                    name="contact"
                    variant='standard'
                    fullWidth
                    required 
                    onChange={(e)=>setContact(e.target.value)}
                    /><br /><br />

                <TextField
                    id='nid'
                    label='NID No.'
                    name="nid"
                    variant='standard'
                    fullWidth 
                    onChange={(e)=>setNid(e.target.value)}
                    /><br /><br />

                <SelectGender />

                <TextField
                    id='password'
                    label='Password'
                    name="password"
                    variant='standard'
                    type='password'
                    fullWidth
                    required 
                    onChange={(e)=>setPassword(e.target.value)}
                    /><br /><br />

                <TextField
                    id='confirmpassword'
                    label='Confirm Password'
                    name="confirmpassword"
                    variant='standard'
                    type='password'
                    fullWidth
                    required 
                    onChange={(e)=>setConfirmPassword(e.target.value)} />


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

                <Button onClick={signup} type='submit' variant="contained" style={btnStyle} fullWidth>Sign Up</Button>


                <Typography>Already a Member?
                    <Link href="#">Log In</Link>
                </Typography>

            </Paper>
        </Grid>



    )
}
export default Signup;