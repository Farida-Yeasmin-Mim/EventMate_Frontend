import React from 'react';
import Button from '@mui/material/Button';
import {Grid} from '@mui/material';
import { Link as RLink } from "react-router-dom";


function OrderDetails(props) {
    return (
        <div>
            <Grid align='center'>
                <h2>Order details</h2>
                <p>Service name:
                    Date:
                    Price:</p>
                <RLink to="/Order_details" style={{ textDecoration: 'none' }}><Button variant="contained">Confirm Order</Button></RLink>

            </Grid>
        </div>
    );
}

export default OrderDetails;