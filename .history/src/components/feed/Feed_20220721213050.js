import React from 'react';
import Button from '@mui/material/Button';
import {Grid} from '@mui/material';

function Feed(props) {
    return (
        <div>
            <Grid align='center'>
                <h2>Feed</h2>
                <Button variant="contained">Create an event</Button>
                <Button variant="outlined">Register a vendor</Button>
            </Grid>
        </div>
    );
}

export default Feed;