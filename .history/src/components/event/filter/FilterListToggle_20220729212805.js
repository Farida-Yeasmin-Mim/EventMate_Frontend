import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {makeStyles } from '@mui/material';
import makeStyles from '@mui/styles';
// import {makeStyles } from '@mui/core/styles'



const useStyles = makeStyles({
    root: {
        width: '100%',
        justifyContent: 'space-between',
    },


    // multiple properties inside toggle class
    toggle: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '.8rem',
        border: '1px solid rgba(0,0,0,0.12)',
        borderRadius: '10px',
        '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
            borderRadius: '10px',
        },
        '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
            borderRadius: '10px',
            border: '1px solid rgba(0,0,0,0.12)',
        },
        '&.Mui-selected':{
            borderRadius: '10px',
            background: '#000',
            color: '#fff',
        },
        '&.MuiToggleButton-root':{
            '&:hover':{
                background: '#000',
                color: '#fff',

            },
        },
    },
});


/* const inside bracket({Receiving props}) */
const FilterListToggle = ({ options, value, selectToggle }) => {
    
    const classes = useStyles()
    return (

        <ToggleButtonGroup
            value={value}
            onChange={selectToggle}
            className={classes.root}
            exclusive
        >
            {options.map(({ label, id, value }) =>
            (<ToggleButton className={classes.toggle} key={id} value={value}>
                {label}
            </ToggleButton>
            ))}

        </ToggleButtonGroup>



    )

}

export default FilterListToggle;