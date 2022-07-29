import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DecorationCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">WD</Avatar>
        }
        action={
          <IconButton aria-label="settings"><MoreVertIcon /></IconButton>
        }
        title=" Wedding Decoration"
        subheader="95,000 BDT"
      />


      <CardMedia
        component="img"
        height="194"
        image="https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/03/engagement-stage-decor.jpg"
        alt="Paella dish"
      />


      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Planning any event is a lot of work. Planning a wedding is on a totally different level.
          We’re talking about the Olympics of event planning. Below you will find a detailed wedding decor checklist,
          with every decor element you can possibly think of listed.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"><FavoriteIcon /></IconButton>
        <IconButton aria-label="share"><ShareIcon /></IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>


      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph><h3>Checklist:</h3></Typography>
          <Typography paragraph>
            One quick tip: consider printing out two lists. One for checking off
            an item when you have it sourced/made/found and another for when you have it set up at your venue(s).
          </Typography>
          <Typography paragraph>
            Gone are the days of hastily made signs on poster board. The same goes for your guests wondering
            where to go or when something starts. Now, beautifully made signs and labels have become
            not only super popular but incredibly beneficial to weddings. And they lend a level of personality,
            which isn’t always easy to do with flowers or other decor.

            Etsy is by far our favorite source for signs, labels, and printables.
            What’s great about Etsy is you can find an artist to create a finished product for you or you can
            print them out yourself, using places like Vistaprint, Walgreens, or even your own home printer,
            to create your signage.


          </Typography>
          <Typography paragraph>
            <h3>A note on DIY decorations</h3>
            We’re also a big proponent of using Cricut (or other cutting devices) to further personalize your decor.
            Something as plain as a chalkboard purchased from Michaels or a piece of scrap wood can end up
            looking beautiful with a bit of Cricut-ing. Check out some of the Cricut projects we’ve created in the past.
          </Typography>

          <Typography>
            Lastly, labels can be easily created and printed via your home computer and printer.
            I personally recommend the brand Avery for labels and this fantabulous all-in-one Canon inkjet
            printer for your home printing needs.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>




  );
}
