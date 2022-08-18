import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Divider, Grid } from '@mui/material';
import { Link } from "react-router-dom";
import UpperList from './UpperList';
import LowerList from './LowerList';
import HorizontalStepper from './HorizontalStepper';
// import PostItem from './PostItem';
import { dataList } from './PostConstants';
import PostList from './PostList';
// import EventDetailsForm from '../event/EventDetailsForm';


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
    const [postList, setPostList] = useState(dataList); 

    return (
        <div>
            <Grid container spacing={2} style={{ marginTop: "3px" }} >
                
                <Grid item xs={12} md={3}>
                    {/* <Link to="/vendor_reg" style={{ textDecoration: 'none' }}><Button variant="outlined">Register a vendor</Button></Link> */}
                    <h3>Your Vendors </h3>
                    <UpperList/>
                    <br />
                    <Divider/>
                    <br />
                    <h3>Following Vendors </h3>
                    <LowerList/>
                </Grid>



                <Grid item xs={12} md={5}>
                    <h3>Post list</h3>
                    <PostList list={postList}/>
                </Grid>



                <Grid item xs={12} md={4}>
                    {/* <EventDetailsForm /> */}
                    <h3>Your Events </h3>
                    <br/>
                    <HorizontalStepper/>
                </Grid>

               

            </Grid>
        </div>
    );
}

export default Feed;