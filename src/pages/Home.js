import React from 'react';
import Button from '@mui/material/Button';
import {Grid} from '@mui/material';

function Home(props) {
    return (
        <div>
            <Grid align='center'>
                <h2>Home</h2>
                <Button variant="contained">Log in</Button>
                <Button variant="outlined">Sign up</Button>
            </Grid>
        </div>
    );
}

export default Home;