import React from 'react'
import { Slider } from '@mui/material'
import { makeStyles } from '@mui/styles';

/*create useStyles method by the help of makestyles*/
const useStyles= makeStyles({
    root:{
        width:'100%',
    },
    thumb:{
        color:'#000',
    },
    rail:{
        color:'rgba(0,0,0,0.26)',
    },
    track:{
        color:'#000', 
    },

});

const SliderProton = ({value, changePrice}) => {
 const classes= useStyles();
  
    return (
    <div className={classes.root}>
        <Slider
        value={value}
        onChange={changePrice}
        valueLabelDisplay="on"
        min={2000}
        max={50000}
        classes={
            {
                thumb:classes.thumb, /*line circle*/
                rail:classes.rail,  /*pricing rail line*/
                track:classes.track, /*pricing rail active part*/
            }
        }
        />
      
    </div>
  )
}

export default SliderProton
