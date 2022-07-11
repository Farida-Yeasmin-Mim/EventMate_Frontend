import * as React from 'react';
import { Grid, Paper, Avatar, TextField, Link, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



const Signup = () => {
    const avatarStyle = { backgroundColor: '#cf88ce'}
    const paperStyle = { padding: 40, height: '110vh', width: 400, margin: '20px auto' }  //creating paperstyle variable by using const
    const btnStyle = { margin: '20px 10px'}

      
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2>
                    <p>Please fill in this form to create an account</p>
                </Grid>


                <TextField id='standard-basic' label='Name' variant='standard' fullWidth required />
                <TextField id='standard-basic' label='Email' variant='standard' fullWidth required />
                <TextField id='standard-basic' label='Address' variant='standard' fullWidth required />
                <TextField id='standard-basic' label='Date of Birth' variant='standard' fullWidth required />

               
                <TextField id='standard-basic' label='Contact No.' variant='standard' type='contact' fullWidth required />
                <TextField id='standard-basic' label='NID No.' variant='standard' fullWidth required />
                

                <TextField id='standard-basic' label='Password' variant='standard' type='password' fullWidth required />
                <TextField id='standard-basic' label='Confirm Password' variant='standard' type='password' fullWidth required />

                
                <br/>
                <br/>
                <FormControlLabel 
                    control={
                        <Checkbox
                            name = "checkedB"
                            color= "primary"
                        />
                    }
                    label= "I accept all the Terms of Use and Privacy Policy"
                />

                <Button type='submit' variant="contained" style= {btnStyle} fullWidth>Sign Up</Button>
                

                <Typography>Already a Member?
                <Link href="#">Log In</Link>
                </Typography>

            </Paper>
        </Grid>



    )
}
export default Signup;