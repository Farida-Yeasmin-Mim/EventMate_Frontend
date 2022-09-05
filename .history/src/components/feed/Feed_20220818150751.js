import React from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";
import EventDetailsForm from '../event/EventDetailsForm';


function Feed(props) {
    // const options = {
    //     broadcaster: 'pusher',
    //     // key: config.pusher.key,
    //     key: "5b9c0add29710ce63a0d",
    //     cluster: "ap2",
    //     forceTLS: "false",
    //     //authEndpoint is your apiUrl + /broadcasting/auth
    //     authEndpoint: "http://127.0.0.1:8000/broadcasting/auth", 
    //     // As I'm using JWT tokens, I need to manually set up the headers.
    //     auth: {
    //       headers: {
    //         Authorization: 'Bearer ' + localStorage.getItem('token'),
    //         Accept: 'application/json',
    //       },
    //     },
    //   };
    // const userId = 2;
    // const echo = new Echo(options);
    // echo.private(`App.User.${userId}`).notification((data) => {
    //     console.log(data.comment.body);
    //     window.alert(data.comment.body);
    // });
    return (
        <div>
            <Grid container spacing={2} style={{ marginTop: "5px" }}>
                <Grid item xs={12} md={3}>
                    <EventDetailsForm />
                    <Link to="/event_create" style={{ textDecoration: 'none' }}><Button variant="contained">Create an event</Button></Link>
                    <Link to="/vendor_reg" style={{ textDecoration: 'none' }}><Button variant="outlined">Register a vendor</Button></Link>

                </Grid>
                <Grid item xs={12} md={5}>
                    <h1>Post list</h1>
                </Grid>
                <Grid item xs={12} md={4}>
                    <h1>xs=6 md=4</h1>
                </Grid>

                {/* <h2>Feed</h2> */}

            </Grid>
        </div>
    );
}

export default Feed;