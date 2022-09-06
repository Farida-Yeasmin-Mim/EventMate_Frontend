// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import { Grid } from '@mui/material';
// import { Link } from "react-router-dom";
// import EventDetailsForm from '../event/EventDetailsForm';
// import { Divider, Grid } from '@mui/material';
// import { Link } from "react-router-dom";
// import UpperList from './UpperList';
// import LowerList from './LowerList';
// import HorizontalStepper from './HorizontalStepper';
// // import PostItem from './PostItem';
// import { dataList } from './PostConstants';
// import PostList from './PostList';
// import { makeStyles } from '@mui/styles'
// import RightList from './RightList';
// // import EventDetailsForm from '../event/EventDetailsForm';


// const useStyles = makeStyles({
//     root: {
//         backgroundColor: '#f2f2f2',

//     },
//     post: {

//         // backgroundColor: '#f2f2f2',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
// });

// function Feed(props) {
//     // const options = {
//     //     broadcaster: 'pusher',
//     //     // key: config.pusher.key,
//     //     key: "5b9c0add29710ce63a0d",
//     //     cluster: "ap2",
//     //     forceTLS: "false",
//     //     //authEndpoint is your apiUrl + /broadcasting/auth
//     //     authEndpoint: "http://127.0.0.1:8000/broadcasting/auth", 
//     //     // As I'm using JWT tokens, I need to manually set up the headers.
//     //     auth: {
//     //       headers: {
//     //         Authorization: 'Bearer ' + localStorage.getItem('token'),
//     //         Accept: 'application/json',
//     //       },
//     //     },
//     //   };
//     // const userId = 2;
//     // const echo = new Echo(options);
//     // echo.private(`App.User.${userId}`).notification((data) => {
//     //     console.log(data.comment.body);
//     //     window.alert(data.comment.body);
//     // });
//     const [postList, setPostList] = useState(dataList); 
//     const classes = useStyles();

//     return (
//         <div>
// <<<<<<< HEAD
//             <Grid container spacing={2} style={{ marginTop: "3px" }}>
//                 <Grid item xs={12} md={3}>
//                     <Link to="/vendor_reg" style={{ textDecoration: 'none' }}><Button variant="outlined">Register a vendor</Button></Link>
//                     <h1>Your Vendors </h1>
//                     <p>Company name</p>
//                     <p>Company name</p>
//                     <br />
//                     <br />
//                     <h1>Following Vendors </h1>
//                     <p>Company name</p>
//                     <p>Company name</p>
//                 </Grid>
//                 <Grid item xs={12} md={5}>
//                     <h1>Post list</h1>
//                 </Grid>
//                 <Grid item xs={12} md={4}>
//                     <EventDetailsForm />
//                     <h1>Your Events </h1>
//                     <p>Mim's birthday</p>
//                     <p>Bushra's wedding</p>
//                 </Grid>

//                 {/* <h2>Feed</h2> */}
// =======
//             <Grid className={classes.root}
//             container spacing={2} style={{ marginTop: "3px" }} >

//                 <Grid item xs={12} md={3}>
//                     {/* <Link to="/vendor_reg" style={{ textDecoration: 'none' }}><Button variant="outlined">Register a vendor</Button></Link> */}
//                     <h3>Your Vendors </h3>
//                     <UpperList/>
//                     <br />
//                     <Divider/>
//                     <br />
//                     <h3>Following Vendors </h3>
//                     <LowerList/>
//                 </Grid>



//                 <Grid className={classes.post}
//                 item xs={12} md={5}>
//                     {/* <h3>Post list</h3> */}
//                     <PostList list={postList}/>
//                 </Grid>



//                 <Grid item xs={12} md={3}>
//                     {/* <EventDetailsForm /> */}
//                     <h3>Your Events </h3>
//                     <br/>
//                     <HorizontalStepper/>
//                     <br />
//                     <Divider/>
//                     <br />
//                     <h3>Contacts</h3>
//                     <RightList/>
//                 </Grid>


// >>>>>>> a3c438ce3bb0fa4054ef49dc6f7e178c0483fe57

//             </Grid>
//         </div>
//     );
// }

// export default Feed;

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
import { makeStyles } from '@mui/styles'
import RightList from './RightList';
import EventDetailsForm from '../event/EventDetailsForm';
import VendorRegForm from '../Dashboard/VendorRegForm';


const useStyles = makeStyles({
    root: {
        backgroundColor: '#f2f2f2',

    },
    post: {

        // backgroundColor: '#f2f2f2',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});


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
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.root}
                container spacing={2} style={{ marginTop: "3px" }} >

                <Grid item xs={12} md={3}>
                    {/* <Link to="/vendor_reg" style={{ textDecoration: 'none' }}><Button variant="outlined">Register a vendor</Button></Link> */}
                    <h3>Your Companies </h3>
                    <LowerList />
                    <br />
                    <VendorRegForm />

                    <Divider />
                    <br />
                    <h3>Following Vendors </h3>
                    <LowerList />
                </Grid>



                <Grid className={classes.post}
                    item xs={12} md={5}>
                    {/* <h3>Post list</h3> */}
                    <PostList list={postList} />
                </Grid>



                <Grid item xs={12} md={3}>
                    <EventDetailsForm />
                    <h3>Your Events </h3>
                    <br />
                    <HorizontalStepper />
                    <br />
                    <Divider />
                    <br />
                    <h3>Contacts</h3>
                    <RightList />
                </Grid>



            </Grid>
        </div>
    );
}

export default Feed;