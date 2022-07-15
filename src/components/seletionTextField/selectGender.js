import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const places = [
  {
    value: 'MLE',
    label: 'Male',
  },
  {
    value: 'FLE',
    label: 'Female',
  },
  {
    value: 'OTH',
    label: 'Other',
  },
];

export default function SelectGender() {
  const [Place, setPlace] = React.useState('FLE');

  const handleChange = (event) => {
    setPlace(event.target.value);
  };

  return (
  
      <div>
        <TextField
          id="standard-select-Place"
          select
          label="Select"
          value={Place}
          onChange={handleChange}
          helperText="Select your Gender"
          variant="standard"
          fullWidth
        >
          {places.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
      </div>
  );
}
