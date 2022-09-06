import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Paper, Avatar, FormControlLabel, Link, Typography, Checkbox } from '@mui/material';
import SelectCategories from '../../components/seletionTextField/selectCategories';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Link as RLink } from "react-router-dom";
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import SelectAreas from '../seletionTextField/SelectAreas';
// import SelectServices from './SelectServices';
import { useNavigate } from 'react-router-dom';

export default function VendorRegForm() {
    const avatarStyle = { backgroundColor: '#1976D2' }
    const paperStyle = { padding: 40, width: 420 }  //creating paperstyle variable by using const
    const btnStyle = { margin: '20px 10px' }
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState(new Date('2022-08-27T18:11:54'));
    const [time, setTime] = React.useState(new Date('2022-08-27T18:11:54'));
    const navigate = useNavigate();

    // const [nextComponent, setNextComponent] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        // setNextComponent(true);
    };

    const handleClose2 = () => {
        setOpen(false);
        // setNextComponent(true);
        navigate('/filterpage');
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
                Register your Company
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}><EventNoteIcon /></Avatar>
                            <h2>Register a New Company</h2>
                            <p>Please fill in this form to create a new event</p>
                        </Grid> <br />

                        <TextField
                            id='name'
                            label='Name'
                            name="name"
                            variant='standard'
                            fullWidth
                            required
                            onChange={(e) => setName(e.target.value)} />
                        <br /><br />

                        <TextField
                            id='email'
                            label='Email'
                            name="email"
                            variant='standard'
                            fullWidth
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        /><br /><br />

                        <TextField
                            id='address'
                            label='Address'
                            name="address"
                            variant='standard'
                            fullWidth
                            onChange={(e) => setAddress(e.target.value)} />
                        <br /><br />

                        <TextField
                            id='contact'
                            label='Contact No.'
                            name="contact"
                            variant='standard'
                            fullWidth
                            onChange={(e) => setContact(e.target.value)}
                        /><br /><br />

                        <TextField
                            id='licence'
                            label='Licence No.'
                            name="licence"
                            variant='standard'
                            fullWidth
                            onChange={(e) => setLicence(e.target.value)} />
                        <br /><br />

                        <TextField
                            id='whatsapp'
                            label='WhatsApp No.'
                            name="whatsapp"
                            variant='standard'
                            fullWidth
                            onChange={(e) => setWhatsApp(e.target.value)}
                        /><br /><br />

                        <TextField
                            id='facebook'
                            label='Facebook Link'
                            name="facebook"
                            variant='standard'
                            fullWidth
                            onChange={(e) => setFacebook(e.target.value)}
                        /><br /><br />

                        <TextField
                            id='linkedin'
                            label='Linkedin Link'
                            name="linkedin"
                            variant='standard'
                            fullWidth
                            onChange={(e) => setLinkedin(e.target.value)}
                        /><br /><br />

                        <TextField
                            id='instagram'
                            label='Instagram Link'
                            name="instagram"
                            variant='standard'
                            fullWidth
                            onChange={(e) => setInstagram(e.target.value)} />
                        <br /><br />

                        <TextField
                            id='youtube'
                            label='Youtube Link'
                            name="youtube"
                            variant='standard'
                            fullWidth
                            onChange={(e) => setYoutube(e.target.value)} />
                        <br /><br />

                    </Paper>
                </Grid>
            </Dialog>
        </div>
    );
}
