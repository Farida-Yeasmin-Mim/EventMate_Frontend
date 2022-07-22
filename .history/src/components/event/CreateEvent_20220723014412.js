import * as React from 'react';
import { Grid, Paper, Avatar, Button, FormControlLabel, TextField, Link, Typography, Checkbox} from '@mui/material';
import SelectCategories from '../../components/seletionTextField/selectCategories';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Link as RLink } from "react-router-dom";

  
const CreateEvent = () => {
    const avatarStyle = { backgroundColor: '#1faf0a' }
    const paperStyle = { padding: 40, height: '113vh', width: 420, margin: '20px auto' }  //creating paperstyle variable by using const
    const btnStyle = { margin: '20px 10px' }


    return (

        
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><EventNoteIcon /></Avatar>
                    <h2>Create a New Event</h2>
                    <p>Please fill in this form to create a new event</p>
                </Grid> <br/>


                <TextField id='standard-basic' label='Date' variant='standard' fullWidth/><br/><br/>
                <TextField id='standard-basic' label='Time' variant='standard' fullWidth  /><br/><br/>
                <TextField id='standard-basic' label='Location' variant='standard' type='contact' fullWidth /><br/><br/>
                <TextField id='standard-basic' label='Max Guest No.' variant='standard' fullWidth/><br/><br/>
                <TextField id='standard-basic' label='Budget' variant='standard' fullWidth /><br/><br/>
                
                <SelectCategories/><br/>
                               
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="I have checked everything clearly"
                />

                {/* <Button type='submit' variant="contained" style={btnStyle} fullWidth>Submit</Button> */}
                <RLink to="/productcategories" style={{ textDecoration: 'none' }}><Button variant="contained">Submit</Button></RLink>

            </Paper>
        </Grid>

    )
}
export default CreateEvent;