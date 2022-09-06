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
        // height: '83vh',
        width: "90 %",
        margin: '20px auto',
    },
    media: {
        height: 250,
        //   width: 250,
        //   padding: '10%',

    },
});


// export default function PostItem({
//     item: { logourl, vendorName, upload, title, image, details, loves, comments },
// }) {

export default function PostItem({
    item
}) {


    const classes = useStyles();
    console.log(item)

    return (


        <Card className={classes.root}>

            <CardHeader
                avatar={<Avatar alt="Cindy Baker" src={item.logourl} />}
                action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                title={item.vendorName}
                subheader={item.upload}
            />


            <CardContent>
                <Typography variant="body2" color="text.secondary"><h3><b>{item.title}</b></h3></Typography>
            </CardContent>


            <CardMedia
                className={classes.media}
                image={item.image}

            />


            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites"><FavoriteTwoToneIcon /></IconButton>
                {/* <Button size="small" color="primary">View Likes</Button> */}

                <IconButton aria-label="share"><InsertCommentTwoToneIcon /></IconButton>
                {/* <Button size="small" color="secondary">View Comments</Button> */}

                {/* <RLink to="/Order_details" style={{ textDecoration: 'none' }}><Button variant="contained">Select Vendor</Button></RLink> */}
                <IconButton aria-label="share"><SaveAltIcon /></IconButton>
            </CardActions>


            <CardContent>
                <Typography variant="body2" color="text.secondary"><b>{item.details}</b></Typography>
            </CardContent>


        </Card>

    );
}
