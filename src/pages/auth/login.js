import React, {useState} from 'react';
import { Grid, Paper, Avatar, TextField, Link, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockIcon from '@mui/icons-material/Lock';
//import {useHistory} from 'react-router-dom';



const Login = () => {
    const avatarStyle = { backgroundColor: '#72b972' }
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' }  //creating paperstyle variable by using const
    const btnStyle = { margin: '8px 0' }
    
    const [username, setUsername]= useState(" ");
    const [password, setPassword]= useState(" ");
    //const history =useHistory();

    // useEffect(()=>{
    //     /if(localStorage.getItem('user-info'))
    // //     {
    // //     //     history.push("/add")
    // //     // }
    // // },[]
    // )


    async function login(){
        console.warn(username, password)
        let item = (username, password);
        let result= await fetch("https://guarded-beach-16980.herokuapp.com/api/login", {
            method:'POST',
            // headers: {
            //   "Content-Type":"application/json",
            //   "Accept": "application/json"
            // },
            body:JSON.stringyfy(item)
        }
        ); 
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringyfy(result))
        // history.push("/add")

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
                <Typography >
                    <Link href="#">Forgot Password</Link>
                </Typography>

                <Typography>Do you have any account?
                    <Link href="#">Sign Up</Link>
                </Typography>


            </Paper>
        </Grid>



    )
}
export default Login;