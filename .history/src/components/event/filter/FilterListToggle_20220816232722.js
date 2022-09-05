import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { makeStyles } from '@mui/styles';
import StarIcon from '@mui/icons-material/Star';

/*create useStyles method by the help of makestyles*/
const useStyles = makeStyles({
    root: {
        width: '100%',
        justifyContent: 'space-between',
    },


    /*multiple properties to style toggle button inside toggle class*/
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
        '&.Mui-selected': {
            borderRadius: '10px',
            background: '#000',
            color: '#fff',
        },
        '&.MuiToggleButton-root': {
            '&:hover': {
                background: '#000',
                color: '#fff',

            },
        },
    },
});


/* const inside bracket({Receiving props}) */
const FilterListToggle = ({ options, value, selectToggle }) => {

    /*create classes variable with usestyles method*/
    const classes = useStyles()
    return (

        <ToggleButtonGroup

            value={value}
            onChange={selectToggle}
            className={classes.root}
            exclusive
        >
            {/*maping all the options    props-(label, id, value) will be receive in options*/}
            {options.map(({ label, id, value }) =>
            (<ToggleButton className={classes.toggle} key={id} value={value}>
                {/*{classes.toggle} will be used to style the elements*/}
                {label}                                 {/* wherever we use a map,need to give a unique key */}
                <StarIcon />
            </ToggleButton>
            ))}

        </ToggleButtonGroup>
    )

}

export default FilterListToggle;