import * as React from 'react';
import { Grid, Paper, Avatar, Button, FormControlLabel, TextField, Link, Typography, Checkbox} from '@mui/material';
import SelectAreas from '../../components/seletionTextField/selectAreas';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import { Link as RLink } from "react-router-dom";

  
const AddDecorationsForm = () => {
    const avatarStyle = { backgroundColor: '#ef73ee' }
    const paperStyle = { padding: 40, height: '175vh', width: 420, margin: '20px auto' }  //creating paperstyle variable by using const
    const btnStyle = { margin: '20px 10px' }


    return (

        
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><FilterVintageTwoToneIcon /></Avatar>
                    <h2>Add Your Desire Decorations</h2>
                    <p>Please fill in this form to add decoration services</p>
                </Grid> <br/>


                <TextField id='standard-basic' label='Service Name' variant='standard' fullWidth/><br/><br/>
                <TextField id='standard-basic' label='Location' variant='standard' fullWidth  /><br/><br/>
                <TextField id='standard-basic' label='Contact No.' variant='standard' type='contact' fullWidth /><br/><br/>
                <TextField id='standard-basic' label='Max Guest No.' variant='standard' fullWidth/><br/><br/>
                <TextField id='standard-basic' label='Required Space' variant='standard' fullWidth /><br/><br/>
                <TextField id='standard-basic' label='Price' variant='standard' fullWidth/><br/><br/>
                <TextField id='standard-basic' label='Inform Time' variant='standard' fullWidth/><br/><br/>
                <TextField id='standard-basic' label='Build Time' variant='standard' fullWidth /><br/><br/>
                <TextField id='standard-basic' label='Offered Colour' variant='standard' fullWidth/><br/><br/>
                <SelectAreas/><br/>
                <TextField id='standard-basic' label='Password' variant='standard' type='password' fullWidth />
                



                
                

                <br />
                <br />
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
                <RLink to="/feed" style={{ textDecoration: 'none' }}><Button variant="contained">Submit</Button></RLink>

            </Paper>
        </Grid>

    )
}
export default AddDecorationsForm;