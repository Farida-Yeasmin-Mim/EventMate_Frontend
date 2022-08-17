import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertCommentTwoToneIcon from '@mui/icons-material/InsertCommentTwoTone';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { makeStyles } from '@mui/styles'



const useStyles = makeStyles({
    root: {
        padding: 10,
        height: '83vh',
        width: 330,
        margin: '20px auto',
        //   maxWidth: 345
    },
    media: {
        height: 250,
        //   width: 250,
        //   padding: '10%',

    },
});


export default function Post() {

    const classes = useStyles();


    return (


            <Card className={classes.root}>

                <CardHeader
                    avatar={<Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">FY</Avatar>}
                    action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                    title="Farida Yeasmin"
                    subheader="1 hour ago"
                />


                <CardContent>
                    <Typography variant="body2" color="text.secondary"><b>How gorgeous the color of this decoration is!!</b></Typography>
                </CardContent>

                
                <CardMedia
                    className={classes.media}
                    image="https://media.istockphoto.com/photos/table-setting-for-an-event-party-or-wedding-reception-picture-id479977238?k=20&m=479977238&s=612x612&w=0&h=6yuuuuHTvosXEGwlPTdY8V4N95issAzrTTQ9ZKN1w3E="
                    alt="Paella dish"
                />


                <CardContent>
                    <Typography variant="body2" color="text.secondary">Glance through some of the most elegant, classy and resplendent wedding décor created by wedding planners and Farida Yeasmin Mim.</Typography>                </CardContent>


                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites"><FavoriteTwoToneIcon /></IconButton>
                    {/* <Button size="small" color="primary">View Likes</Button> */}

                    <IconButton aria-label="share"><InsertCommentTwoToneIcon /></IconButton>
                    {/* <Button size="small" color="secondary">View Comments</Button> */}
                    
                    {/* <RLink to="/Order_details" style={{ textDecoration: 'none' }}><Button variant="contained">Select Vendor</Button></RLink> */}
                    <IconButton aria-label="share"><SaveAltIcon /></IconButton>
                
                </CardActions>

            </Card>



    );
}
