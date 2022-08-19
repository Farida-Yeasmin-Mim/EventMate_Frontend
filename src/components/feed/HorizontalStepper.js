import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Create an Event',
  'Place Order',
  'Confirm Order',
];

export default function HorizontalStepper() {
  return (
    <Box sx={{ width: '100%' }}>
      
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

    </Box>
  );
}
