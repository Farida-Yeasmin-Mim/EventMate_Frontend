import React from 'react';
import Button from '@mui/material/Button';
import {Grid} from '@mui/material';
import { Link } from "react-router-dom";


function Dashboard(props) {
    return (
        <div>
            <Grid align='center'>
                <h2>Vendor Dashboard</h2>
                <Link to="/addDecorationsForm" style={{ textDecoration: 'none' }}><Button variant="contained">Add a service</Button></Link>
                
            </Grid>
        </div>
    );
}

export default Dashboard;