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
import SelectAreas from '../seletionTextField/SelectAreas';
import {SelectServices()} from './SelectServices';

export default function EventDetailsForm() {
  const avatarStyle = { backgroundColor: '#1976D2' }
  const paperStyle = { padding: 40,  width: 420 }  //creating paperstyle variable by using const
  const btnStyle = { margin: '20px 10px' }
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(new Date('2022-08-27T18:11:54'));
  const [time, setTime] = React.useState(new Date('2022-08-27T18:11:54'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    SelectServices();
    setOpen(false);
    
  };

  const handleChangeDate = (newValue) => {
    setDate(newValue);
  };

  const handleChangeTime = (newValue) => {
    setTime(newValue);
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
                      label="Event Date*"
                      inputFormat="MM/dd/yyyy"
                      value={date}
                      onChange={handleChangeDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    
                    <TimePicker
                      label="Event Starting Time"
                      value={time}
                      onChange={handleChangeTime}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
                <br/>
                <TextField id='outlined-basic' label='Address' variant='outlined' fullWidth  /><br/><br/>
                <SelectAreas/><br/>
                <TextField id='outlined-basic' label='Guest No. (approximate)' variant='outlined' fullWidth/><br/><br/>
                <TextField id='outlined-basic' label='Budget (approximate)' variant='outlined' fullWidth /><br/><br/>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
                               
                {/* <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="I have checked everything clearly"
                /> */}

                {/* <Button type='submit' variant="contained" style={btnStyle} fullWidth>Submit</Button> */}
                {/* <RLink to="/productcategories" style={{ textDecoration: 'none' }}><Button variant="contained">Submit</Button></RLink> */}

            </Paper>
        </Grid>
      </Dialog>
    </div>
  );
}
