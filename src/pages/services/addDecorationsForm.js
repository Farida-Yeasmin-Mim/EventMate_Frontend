import * as React from 'react';
import { Grid, Paper, Avatar, Button, FormControlLabel, TextField, Link, Typography, Checkbox } from '@mui/material';
import SelectAreas from '../../components/seletionTextField/selectAreas';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import { Link as RLink } from "react-router-dom";


const AddDecorationsForm = () => {
    const avatarStyle = { backgroundColor: '#ef73ee' }
    const paperStyle = { padding: 40, height: '175vh', width: 420, margin: '20px auto' }  //creating paperstyle variable by using const
    const btnStyle = { margin: '20px 10px' }

    const [name, setName] = useState(" ");
    const [location, setLocation] = useState(" ");
    const [phone, setPhone] = useState(" ");
    const [guest, setGuest] = useState(" ");
    const [space, setSpace] = useState(" ");
    const [price, setPrice] = useState(" ");
    const [inform, setInform] = useState(" ");
    const [build, setBuild] = useState(" ");
    const [colors, setColour] = useState(" ");
    const [password, setPassword] = useState(" ");
    

    const [result, setResult] = useState(" ");
    const navigate = useNavigate();


    async function services() {
        // console.warn(username, password)
        let item = {
            name: name,
            location: location,
            phone: phone,
            guest: guest,
            space: space,
            price: price,
            inform: inform,
            build: build,
            colors: colors,
            password: password,
        };

        axios.post('services', item)
            .then((response) => {
                setResult(response.data)
                console.log(result.data);
                navigate('/');
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
                    <Avatar style={avatarStyle}><FilterVintageTwoToneIcon /></Avatar>
                    <h2>Add Your Desire Decorations</h2>
                    <p>Please fill in this form to add decoration services</p>
                </Grid> <br />


                <TextField
                    id='name'
                    label='Service Name'
                    name="name"
                    variant='standard'
                    fullWidth
                    onChange={(e) => setName(e.target.value)}
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
                    id='phone'
                    label='Contact No.'
                    name="phone"
                    variant='standard'
                    fullWidth
                    onChange={(e) => setPhone(e.target.value)}
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
                    id='space'
                    label='Required Space'
                    name="space"
                    variant='standard'
                    fullWidth
                    onChange={(e) => setSpace(e.target.value)}
                /><br /><br />

                <TextField
                    id='price'
                    label='Price'
                    name="price"
                    variant='standard'
                    fullWidth
                    onChange={(e) => setPrice(e.target.value)}
                /><br /><br />

                <TextField
                    id='inform'
                    label='Inform Time'
                    name="inform"
                    variant='standard'
                    fullWidth
                    onChange={(e) => setInform(e.target.value)}
                /><br /><br />

                <TextField
                    id='build'
                    label='Build Time'
                    name="build"
                    variant='standard'
                    fullWidth
                    onChange={(e) => setBuild(e.target.value)}
                /><br /><br />

                <TextField
                    id='colors'
                    label='Offered Colour'
                    name="colors"
                    variant='standard'
                    fullWidth
                    onChange={(e) => setColour(e.target.value)}
                /><br /><br />

                <SelectAreas /><br />

                <TextField
                    id='password'
                    label='Password'
                    name="password"
                    variant='standard'
                    type='password'
                    fullWidth
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />


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

                {/* <Button onClick={services} type='submit' variant="contained" style={btnStyle} fullWidth>Submit</Button> */}
                <RLink to="/feed" style={{ textDecoration: 'none' }}><Button variant="contained">Submit</Button></RLink>

            </Paper>
        </Grid>

    )
}
export default AddDecorationsForm;