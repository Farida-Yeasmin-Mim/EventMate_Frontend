import React from 'react';
import Button from '@mui/material/Button';
import {Grid} from '@mui/material';

function Dashboard(props) {
    return (
        <div>
            <Grid align='center'>
                <h2>Vendor Dashboard</h2>
                <Button variant="contained">Add a service</Button>
                
            </Grid>
        </div>
    );
}

export default Dashboard;