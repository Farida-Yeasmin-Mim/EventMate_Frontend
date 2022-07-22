import React, {useState, useEffect} from 'react';
import { Grid, Paper, Avatar, TextField, Link, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const Login = () => {
    const avatarStyle = { backgroundColor: '#72b972' }
    const paperStyle = { padding: 30, height: '75vh', width: 280, margin: '20px auto' }  //creating paperstyle variable by using const
    const btnStyle = { margin: '8px 0' }
    
    const [username, setUsername]= useState(" ");
    const [password, setPassword]= useState(" ");
    // const [result, setResult]= useState(" "); 
    const navigate = useNavigate();

    async function login(){
        // console.warn(username, password)
        let item = {
            email: username, 
            password: password
        };

        // const headers = { 
        //     "Content-Type": "application/json",
        //     "Accept": "application/json",
        // };
        
        // axios.post('https://guarded-beach-16980.herokuapp.com/api/login', item,  {headers})
        // axios.post('login',item, {headers})
        const result = {};
        axios.post('login',item)
            // .then(response => setResult({ info: response.data}))
            .then((response) => {
                // setResult(response.data)
                result= response.data
                console.log(result.data);
                console.log("Token " + result.token);
            })
            .catch(error => {
                //this.setResult({ errorMessage: error.message });
                console.error('There was an error!', error);
        });
        localStorage.setItem("user-name", result.data.name)
        localStorage.setItem("token", result.token);
        navigate('/feed');

        
        //navigate('/feed'); 

    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon /></Avatar>
                    <h2>Log In</h2>
                </Grid>


                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                </Grid>
                <br />

                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </Grid>
                        
                <br/>       
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    
                    label="Remember me"
                />
                <Button onClick={login} type='submit' variant="contained" style={btnStyle} fullWidth>Log In</Button>

                <br/>
                <br/>
               
                <Typography textAlign= 'center'>
                    <Link href="#">Forgot Password</Link>
                </Typography>

                <br/>
                <Typography>Do you have any account?
                    <Link href="#">Sign Up</Link>
                </Typography>


            </Paper>
        </Grid>



    )
}
export default Login;