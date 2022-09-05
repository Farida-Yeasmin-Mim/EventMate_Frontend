import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Paper, Avatar, FormControlLabel, Link, Typography, Checkbox} from '@mui/material';
import SelectCategories from '../../components/seletionTextField/selectCategories';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Link as RLink } from "react-router-dom";
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function EventDetailsForm() {
  const avatarStyle = { backgroundColor: '#1faf0a' }
  const paperStyle = { padding: 40,  width: 420 }  //creating paperstyle variable by using const
  const btnStyle = { margin: '20px 10px' }
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create an Event
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><EventNoteIcon /></Avatar>
                    <h2>Create a New Event</h2>
                    <p>Please fill in this form to create a new event</p>
                </Grid> <br/>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      label="Date desktop"
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    
                    <TimePicker
                      label="Time"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
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
      </Dialog>
    </div>
  );
}
