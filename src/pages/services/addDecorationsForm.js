import * as React from 'react';
import { Grid, Paper, Avatar, Button, FormControlLabel, TextField, Link, Typography, Checkbox} from '@mui/material';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import SelectTextFields from '.components/cards/selectTextField';

  
const AddDecorationsForm = () => {
    const avatarStyle = { backgroundColor: '#ef73ee' }
    const paperStyle = { padding: 40, height: '135vh', width: 410, margin: '20px auto' }  //creating paperstyle variable by using const
    const btnStyle = { margin: '20px 10px' }


    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockResetOutlinedIcon /></Avatar>
                    <h2>Add Your Desire Decorations</h2>
                    <p>Please fill in this form to add decoration services</p>
                </Grid>


                <TextField id='standard-basic' label='Service Name' variant='standard' fullWidth/>
                <TextField id='standard-basic' label='Email' variant='standard' fullWidth  />
                <TextField id='standard-basic' label='Location' variant='standard' fullWidth  />
                <TextField id='standard-basic' label='Contact No.' variant='standard' type='contact' fullWidth />
                <TextField id='standard-basic' label='Max Guest No.' variant='standard' fullWidth/>
                <TextField id='standard-basic' label='Required Space' variant='standard' fullWidth />
                <TextField id='standard-basic' label='price' variant='standard' fullWidth/>
                <TextField id='standard-basic' label='Inform Time' variant='standard' fullWidth/>
                <TextField id='standard-basic' label='Build Time' variant='standard' fullWidth />
                <TextField id='standard-basic' label='Offered Colour' variant='standard' fullWidth/>
                <TextField id='standard-basic' label='Password' variant='standard' type='password' fullWidth />
                <TextField id='standard-basic'><SelectTextFields/></TextField>

                
                

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
export default AddDecorationsForm;