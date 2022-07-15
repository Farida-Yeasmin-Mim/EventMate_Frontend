import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Button, TextField, Typography, Container, Snackbar } from '@mui/material';



function Offer() {
    const [open, setOpen] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container component="section" sx={{ mt: 10, display: 'flex' }}>
            <Grid container>
                <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            bgcolor: '#f7d08f',
                            py: 8,
                            px: 3,
                        }}
                    >
                        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
                            <Typography variant="h2" component="h2" gutterBottom> 
                                                     {/* //gutterBottom for giving some space after receive offers */}
                                Receive offers
                            </Typography>
                            <Typography variant="h6">
                                Taste the holidays of the everyday close to home.
                            </Typography>

                            <br/>

                            <TextField
                                fullWidth
                                id="username"
                                label="Your email"
                                name="username"
                                style={{background: "rgb(232, 241, 250)"}}
                   
                            />
                            <br/>
                            <br/>


                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                sx={{ width: '100%' }}
                            >
                                Keep me updated
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: -67,
                            left: -67,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            background: 'url(https://gitlab.create-ion.at/lt/material-ui/-/raw/v4.0.2/static/themes/onepirate/productCTAImageDots.png)',
                        }}
                    />
                    <Box
                        component="img"
                        src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750"
                        alt="call to action"
                        sx={{
                            position: 'absolute',
                            top: -28,
                            left: -28,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            maxWidth: 600,
                        }}
                    />
                </Grid>
            </Grid>
            <Snackbar
                open={open}
                closeFunc={handleClose}
                message="We will send you our best offers, once a week."
            />
        </Container>
    );
}

export default Offer;