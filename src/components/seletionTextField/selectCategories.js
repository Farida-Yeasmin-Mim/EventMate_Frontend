import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const places = [
  {
    value: 'dec',
    label: 'Decoration',
  },
  {
    value: 'mus',
    label: 'Music',
  },
  {
    value: 'cat',
    label: 'Catering',
  },
  {
    value: 'cak',
    label: 'Cake',
  },
  {
    value: 'out',
    label: 'Outfit',
  },
  {
    value: 'pho',
    label: 'Photography',
  },
  {
    value: 'vid',
    label: 'Videography',
  },
  {
    value: 'meh',
    label: 'Mehedi',
  },
  {
    value: 'mak',
    label: 'Makeover',
  },
  {
    value: 'dan',
    label: 'Dancer',
  },
];

export default function SelectCategories() {
  const [Place, setPlace] = React.useState('mus');

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
          helperText="Please select categories"
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
