import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

// const places = [
//   {
//     value: 'IND',
//     label: 'Indoor',
//   },
//   {
//     value: 'OUT',
//     label: 'Outdoor',
//   },
//   {
//     value: 'BTH',
//     label: 'Both',
//   },
//   {
//     value: 'OTH',
//     label: 'Other',
//   },
// ];
const areas = [
  {
    value: 'Mirpur',
    label: 'Mirpur',
  },
  {
    value: 'Bashundhara',
    label: 'Bashundhara',
  },
  {
    value: 'Banani',
    label: 'Banani',
  },
  {
    value: 'Uttara',
    label: 'Uttara',
  },
  {
    value: 'Shantinagar',
    label: 'Shantinagar',
  },
  {
    value: 'Mohammadpur',
    label: 'Mohammadpur',
  },
  {
    value: 'Dhanmondi',
    label: 'Dhanmondi',
  },
  {
    value: 'Mohakhali',
    label: 'Mohakhali',
  },
  
];

export default function SelectAreas() {
  const [area, setArea] = React.useState('Bashundhara');

  const handleChange = (event) => {
    setArea(event.target.value);
  };

  return (
  
      <div>
        <TextField
          id="standard-select-Place"
          select
          label="Area*"
          value={area}
          onChange={handleChange}
          // helperText="Please select areas"
          variant="outlined"
          fullWidth
        >
          {areas.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
      </div>
  );
}
