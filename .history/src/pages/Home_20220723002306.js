import React from 'react';
import Button from '@mui/material/Button';
import {Grid} from '@mui/material';
import { Link } from "react-router-dom";

function Home(props) {
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