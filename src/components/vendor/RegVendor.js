import * as React from 'react';
import { Grid, Paper, Avatar, Button, TextField} from '@mui/material';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link as RLink } from "react-router-dom";


const RegVendor = () => {
    const avatarStyle = { backgroundColor: '#ef73ee' }
    const paperStyle = { padding: 40, height: '163vh', width: 400, margin: '20px auto' }  //creating paperstyle variable by using const
    const btnStyle = { margin: '20px 10px' }

    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [address, setAddress] = useState(" ");
    const [contact, setContact] = useState(" ");
    const [licence, setLicence] = useState(" ");
    const [whatsapp, setWhatsApp] = useState(" ");
    const [facebook, setFacebook] = useState(" ");
    const [linkedin, setLinkedin] = useState(" ");
    const [instagram, setInstagram] = useState(" ");
    const [youtube, setYoutube] = useState(" ");


    const [result, setResult] = useState(" ");
    const navigate = useNavigate();

    async function submit() {
        // console.warn(username, password)
        let item = {
            name: name,
            email: email,
            address: address,
            contact: contact,
            licence: licence,
            whatsapp: whatsapp,
            facebook: facebook,
            linkedin: linkedin,
            instagram: instagram,
            youtube:youtube,
            
        };
        console.log(localStorage.getItem('token'));

       
        axios.post('vendorstore', item)
            .then((response) => {
                setResult(response.data)
                console.log(result.data);
                navigate('/vendor_dashboard'); 
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
                    <Avatar style={avatarStyle}><LockResetOutlinedIcon /></Avatar>
                    <h2>Registration Form</h2>
                    <p>Please fill in this form to create an account</p>
                </Grid>


                <TextField 
                id='name'
                label='Name'
                name="name"
                variant='standard'
                fullWidth
                required
                onChange={(e)=>setName(e.target.value)}/>
                <br/><br/>
                
                <TextField 
                id='email'
                label='Email'
                name="email"
                variant='standard'
                fullWidth
                required 
                onChange={(e)=>setEmail(e.target.value)}
                /><br/><br/>
                
                <TextField 
                id='address'
                label='Address'
                name="address"
                variant='standard'
                fullWidth
                onChange={(e)=>setAddress(e.target.value)}  />
                <br/><br/>

                <TextField 
                id='contact'
                label='Contact No.'
                name="contact"
                variant='standard'
                fullWidth
                onChange={(e)=>setContact(e.target.value)} 
                /><br/><br/>
                
                <TextField 
                id='licence'
                label='Licence No.'
                name="licence"
                variant='standard'
                fullWidth 
                onChange={(e)=>setLicence(e.target.value)}/>
                <br/><br/>
                
                <TextField 
                id='whatsapp'
                label='WhatsApp No.'
                name="whatsapp"
                variant='standard'
                fullWidth 
                onChange={(e)=>setWhatsApp(e.target.value)}
                /><br/><br/>

                <TextField 
                id='facebook'
                label='Facebook Link'
                name="facebook"
                variant='standard'
                fullWidth 
                onChange={(e)=>setFacebook(e.target.value)}
                /><br/><br/>

                <TextField 
                id='linkedin'
                label='Linkedin Link'
                name="linkedin"
                variant='standard'
                fullWidth 
                onChange={(e)=>setLinkedin(e.target.value)}
                /><br/><br/>
                
                <TextField 
                id='instagram'
                label='Instagram Link'
                name="instagram"
                variant='standard'
                fullWidth 
                onChange={(e)=>setInstagram(e.target.value)}/>
                <br/><br/>
                
                <TextField 
                id='youtube'
                label='Youtube Link'
                name="youtube"
                variant='standard'
                fullWidth 
                onChange={(e)=>setYoutube(e.target.value)}/>
                <br/><br/>
                

                <br />
                <br />


                <Button onClick={submit} type='submit' variant="contained" style={btnStyle} fullWidth>Submit</Button>
                <RLink to="/vendor_dashboard" style={{ textDecoration: 'none' }}><Button variant="contained">Skip for now</Button></RLink>


            </Paper>
        </Grid>

    )
}
export default RegVendor;