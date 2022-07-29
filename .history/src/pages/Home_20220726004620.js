import React from 'react';
import Button from '@mui/material/Button';
import {Grid} from '@mui/material';
import { Link } from "react-router-dom";
import Echo from 'laravel-echo';

function Home(props) {

    const options = {
        broadcaster: 'pusher',
        key: config.pusher.key,
        cluster: config.pusher.cluster,
        forceTLS: config.pusher.tls,
        //authEndpoint is your apiUrl + /broadcasting/auth
        authEndpoint: config.pusher.authEndpoint, 
        // As I'm using JWT tokens, I need to manually set up the headers.
        auth: {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json',
          },
        },
      };
      
      const echo = new Echo(options);
      echo.private(`App.User.${userId}`).notification((data) => {
          console.log(data);
      });
    return (
        <div>
            <Grid align='center'>
                <h2>Home</h2>
                <Link to="/login" style={{ textDecoration: 'none' }}><Button variant="contained">Log in</Button></Link>
                <Link to="/signup" style={{ textDecoration: 'none' }}><Button variant="outlined">Sign up</Button></Link>
            </Grid>
        </div>
    );
}

export default Home;