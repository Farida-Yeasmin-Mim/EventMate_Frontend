import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import MusicNoteTwoToneIcon from '@mui/icons-material/MusicNoteTwoTone';
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';
import FoodBankTwoToneIcon from '@mui/icons-material/FoodBankTwoTone';
import BrushTwoToneIcon from '@mui/icons-material/BrushTwoTone';
import PanToolTwoToneIcon from '@mui/icons-material/PanToolTwoTone';
import CakeTwoToneIcon from '@mui/icons-material/CakeTwoTone';
import WomanTwoToneIcon from '@mui/icons-material/WomanTwoTone';


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
      <Tab icon={<FilterVintageTwoToneIcon />} iconPosition="start" label="Decoration" />
      <Tab icon={<MusicNoteTwoToneIcon />} iconPosition="start" label="Music" />
      <Tab icon={<CameraAltTwoToneIcon />} iconPosition="start" label="Photography" />
      <Tab icon={<FoodBankTwoToneIcon />} iconPosition="start" label="Catering" />
      <Tab icon={<BrushTwoToneIcon />} iconPosition="start" label="Makeover" />
      <Tab icon={<PanToolTwoToneIcon />} iconPosition="start" label="Mehedi" />
      <Tab icon={<CakeTwoToneIcon />} iconPosition="start" label="Cake" />
      <Tab icon={<WomanTwoToneIcon />} iconPosition="start" label="Outfit" />

    </Tabs>
  );
}
