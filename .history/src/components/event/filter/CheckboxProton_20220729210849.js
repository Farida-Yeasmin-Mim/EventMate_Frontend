import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/material'


// create useStyles method
const useStyles = makeStyles({
    root: {
        '&$checked': {
            color: '#000',
        }
    },

    checked: {},
    wrap: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 0,
    },
    label:{
        fontSize:'8rem',
        fontFamily: "'Raleway', sans-serif",
    },
})

const CheckboxProton = ({ decoration, changeChecked }) => {
    const classes = useStyles()
    const { value, label, id } = decoration;

    return (
        <div>
            <FormControlLabel

                classes={{
                    label: classes.label,
                    root: classes.wrap

                }}
                // rander checkbox using control
                control={
                    <Checkbox classes={{
                        checked: classes.checked,
                        root: classes.root
                    }}

                        size="small"
                        // checked={checked}
                        onChange={() => changeChecked(id)}
                    />

                }

                label={label}
            />




        </div>
    )
}

export default CheckboxProton