import React from 'react';
import Button from '@mui/material/Button';
import {Grid} from '@mui/material';

function Feed(props) {
    return (
        <div>
            <Grid align='center'>
                <h2>Feed</h2>
                <Link to="/event_create" style={{ textDecoration: 'none' }}><Button variant="contained">Create an event</Button></Link>
                <Link to="/vendor_reg" style={{ textDecoration: 'none' }}><Button variant="outlined">Register a vendor</Button></Link>
            </Grid>
        </div>
    );
}

export default Feed;