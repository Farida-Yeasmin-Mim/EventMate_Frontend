import * as React from 'react';
import { Grid, Paper, Avatar, Button, FormControlLabel, TextField, Link, Typography, Checkbox } from '@mui/material';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';


const RegVendor = () => {
    const avatarStyle = { backgroundColor: '#ef73ee' }
    const paperStyle = { padding: 40, height: '163vh', width: 400, margin: '20px auto' }  //creating paperstyle variable by using const
    const btnStyle = { margin: '20px 10px' }


    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockResetOutlinedIcon /></Avatar>
                    <h2>Registration Form</h2>
                    <p>Please fill in this form to create an account</p>
                </Grid>


                <TextField id='standard-basic' label='Name' variant='standard' fullWidth required /><br/><br/>
                <TextField id='standard-basic' label='Email' variant='standard' fullWidth /><br/><br/>
                <TextField id='standard-basic' label='Address' variant='standard' fullWidth  /><br/><br/>
                <TextField id='standard-basic' label='Contact No.' variant='standard' type='contact' fullWidth  /><br/><br/>
                <TextField id='standard-basic' label='Licence No.' variant='standard' fullWidth/><br/><br/>
                <TextField id='standard-basic' label='Whatsapp No.' variant='standard' fullWidth  /><br/><br/>
                <TextField id='standard-basic' label='Facebook link' variant='standard' fullWidth/><br/><br/>
                <TextField id='standard-basic' label='Linkedin link' variant='standard' fullWidth/><br/><br/>
                <TextField id='standard-basic' label='Instagram link' variant='standard' fullWidth /><br/><br/>
                <TextField id='standard-basic' label='Youtube link' variant='standard' fullWidth/><br/><br/>
                

                <br />
                <br />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="I accept all the Terms of Use and Privacy Policy"
                />

                <Button type='submit' variant="contained" style={btnStyle} fullWidth>Submit</Button>


                <Typography>Already a Member?
                    <Link href="#">Log In</Link>
                </Typography>

            </Paper>
        </Grid>

    )
}
export default RegVendor;