import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const steps = [
  'Create an Event',
  'Place Order',
  'Confirm Order',
];

export default function HorizontalStepper(prop) {
  return (
    <Box sx={{ width: '100%' }} style={{ backgroundColor: "white", padding: "20px" }}>
      <h4>{prop.name}</h4>
      <br />
      <Stepper activeStep={prop.step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <br />
      {
        (prop.step == 3) ? (

          <Button
            variant='contained'
            color='success'>
            <Link style={{ textDecoration: 'none', color: 'white' }} to={"/filterpage"}>Confirm Order</Link>

          </Button>

        ) : (<Link style={{ textDecoration: 'none', color: 'rgb(36, 87, 255)' }} to={"/filterpage"}></Link>
        )
      }


    </Box >
  );
}
