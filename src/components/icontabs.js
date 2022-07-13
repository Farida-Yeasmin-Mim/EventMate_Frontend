import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';

export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs 
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
    >
    
      <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="Decoration" />
      <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="Music" />
      <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="Photography" />
      <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="Catering" />
      <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="Makeover" />
      <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="Mehedi" />
      <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="Cake" />
      <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="Outfit" />

    </Tabs>
  );
}
