import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';



//imagebackdrop giving all the images a hover color
const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

//botton
const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 100,
  },

  //hover effect to all images
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },

  //mark below in title and give transition
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));


const images = [
  {
    url: 'https://media.istockphoto.com/photos/interior-of-a-wedding-tent-decoration-ready-for-guests-picture-id486993238?k=20&m=486993238&s=612x612&w=0&h=9__e1jcI5eZo3zbW8ho9BKa7BmUQLoOCfg_ahFGmwUM=',
    title: 'Decoration',
    width: '40%',
  },
  {
    url: 'https://images.pexels.com/photos/4397882/pexels-photo-4397882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Gift',
    width: '20%',
  },
  {
    url: 'https://media.istockphoto.com/photos/young-asian-man-with-eyes-closed-enjoying-music-over-headphones-while-picture-id1347685599?b=1&k=20&m=1347685599&s=612x612&w=0&h=JDKXmX_t2OX8y3UAGB0xw8geDuWz_k_zw2LFCXb2KmI=',
    title: 'Music',
    width: '40%',
  },
  {
    url: 'https://expertphotography.b-cdn.net/wp-content/uploads/2019/03/Chocolate-Cake-Darina-Kopcok-Expert-Phtography.jpg',
    title: 'Cake',
    width: '38%',
  },
  {
    url: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Catering',
    width: '38%',
  },
  {
    url: 'https://media.istockphoto.com/photos/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-picture-id1193750118?b=1&k=20&m=1193750118&s=170667a&w=0&h=dWmXq8D_P7sHRIZn-fPNRLPJaAvSvJmeYH9Bsq8Ywhs=',
    title: 'Outfit',
    width: '24%',
  },
  {
    url: 'https://image.shutterstock.com/image-photo/aguascalientes-03042019-videographer-social-events-260nw-1396920338.jpg',
    title: 'Photography',
    width: '40%',
  },
  {
    url: 'https://i.pinimg.com/236x/61/81/36/6181368abdcbe4543e1e0ce8a3bd2a9d.jpg',
    title: 'Mehedi',
    width: '20%',
  },
  {
    url: 'https://www.trendingus.com/wp-content/uploads/2020/02/8762b92c0fb963fb6ff658741e074ef1.jpeg',
    title: 'Makeover',
    width: '40%',
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h3" align="center">
        Services
      </Typography>

      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (

          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />

            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >

              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>


            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}