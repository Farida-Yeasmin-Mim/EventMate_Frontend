import React from 'react';
import Button from '@mui/material/Button';
import {Grid} from '@mui/material';

function OrderDetails(props) {
    return (
        <div>
            <Grid align='center'>
                <h2>Order details</h2>
                <p>show text fields</p>
                <Button variant="outlined">Confirm Order</Button>

            </Grid>
        </div>
    );
}

export default OrderDetails;