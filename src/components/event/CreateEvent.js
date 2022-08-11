import * as React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Paper, Avatar, Button, FormControlLabel, TextField, Link, Typography, Checkbox } from '@mui/material';
import SelectCategories from '../../components/seletionTextField/selectCategories';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Link as RLink } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CreateEvent = () => {
    const avatarStyle = { backgroundColor: '#1faf0a' }
    const paperStyle = { padding: 40, height: '113vh', width: 420, margin: '20px auto' }  //creating paperstyle variable by using const
    const btnStyle = { margin: '20px 10px' }

    const [date, setDate] = useState(" ");
    const [time, setTime] = useState(" ");
    const [location, setLocation] = useState(" ");
    const [guest, setGuest] = useState(" ");
    const [budget, setBudget] = useState(" ");
    

    const [result, setResult] = useState(" ");
    const navigate = useNavigate();


    async function event() {
        // console.warn(username, password)
        let item = {
            date: date,
            time: time,
            location: location,
            guest: guest,
            budget: budget,
        };


        /* axios package is used to send the request from frontend to backend in react */ 
        /* post is used to send the data from from frontend to backend*/ 
        axios.post('event', item)          /* ('services'= 'url' , item= the data we want to send)  */ 
         
/*if post api can successfully send data, it will enter to '.then'(.then come from backend) or if not then '.catch' */   
        .then((response) => {           /* "response" is send from backend */           
                setResult(response.data)  /* response will be stored in "result" variable as it may not same always */
                console.log(result.data); /* "console.log" to show what response came from backend */
                navigate('/');            /* "navigate" is used to change the page (/ is home page) */
            })
            .catch(error => {
                //this.setResult({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }

    return (


        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><EventNoteIcon /></Avatar>
                    <h2>Create a New Event</h2>
                    <p>Please fill in this form to create a new event</p>
                </Grid> <br />


                <TextField
                    id='date'
                    label='Date'
                    name="date"
                    variant='standard'
                    fullWidth
                    onChange={(e) => setDate(e.target.value)}
                /><br /><br />

                <TextField
                    id='time'
                    label='Time'
                    name="time"
                    variant='standard'
                    fullWidth
                    onChange={(e) => setTime(e.target.value)}
                /><br /><br />

                <TextField
                    id='location'
                    label='Location'
                    name="location"
                    variant='standard'
                    fullWidth
                    onChange={(e) => setLocation(e.target.value)}
                /><br /><br />

                <TextField
                    id='guest'
                    label='Max Guest No.'
                    name="guest"
                    variant='standard'
                    fullWidth
                    onChange={(e) => setGuest(e.target.value)}
                /><br /><br />

                <TextField
                    id='budget'
                    label='Budget'
                    name="budget"
                    variant='standard'
                    fullWidth
                    onChange={(e) => setBudget(e.target.value)}
                /><br /><br />

                <SelectCategories /><br />

                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="I have checked everything clearly"
                />

                <Button onClick={event} type='submit' variant="contained" style={btnStyle} fullWidth>Submit</Button>
                {/* <RLink to="/productcategories" style={{ textDecoration: 'none' }}><Button variant="contained">Submit</Button></RLink> */}

            </Paper>
        </Grid>

    )
}
export default CreateEvent;