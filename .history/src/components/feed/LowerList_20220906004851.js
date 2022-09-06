import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function LowerList() {
  const data = [{ "name": "test1" }, { "name": "test2" }];
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios.get('vendors')
      .then((response) => {
        setVendors(response.data.data);
        console.log(vendors);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#f2f2f2' }}>
      {vendors.map((item) => (
        < ListItem key={item.id} alignItems="flex-start" >
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/280087113_3077999089184262_8027352802270825525_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=P-nottQpoFIAX_tbnb8&_nc_ht=scontent.fdac24-1.fna&oh=00_AT8Q-4tN5ucsVCT76qm0Lczy1dBm1IHk-kQKeYE3_AwwhQ&oe=6311EE8E" />
          </ListItemAvatar>
          <ListItemText
            primary={item.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Farida Yeasmin Mim
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
      ))
      }
      {/* <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/280087113_3077999089184262_8027352802270825525_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=P-nottQpoFIAX_tbnb8&_nc_ht=scontent.fdac24-1.fna&oh=00_AT8Q-4tN5ucsVCT76qm0Lczy1dBm1IHk-kQKeYE3_AwwhQ&oe=6311EE8E" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Farida Yeasmin Mim
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>


      <Divider variant="inset" component="li" />


      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://scontent.fdac24-2.fna.fbcdn.net/v/t1.6435-9/54524010_107116077123648_823614198675144704_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Dngtn2aenlsAX-dQ4Xb&tn=_BNTl5yRC_khlXqE&_nc_ht=scontent.fdac24-2.fna&oh=00_AT8xF-kbQskD8OdXrM_MMPP-2UGK83ghKLhv2kUHRtuk6w&oe=632078BB" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Kaniz Fatema
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>


      <Divider variant="inset" component="li" />


      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/285628568_5252854231444748_466893369751832389_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yzHTOhISN1kAX9y3fV9&_nc_ht=scontent.fdac24-1.fna&oh=00_AT_AeIf4o54AGh-4MnOLmH43HxYNVVW9QxtiM0zVfz50Pw&oe=631363E6" />
        </ListItemAvatar>
        <ListItemText
          primary="Semester Done"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Momtahina Bushra
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>



      <Divider variant="inset" component="li" />


      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/273534409_4841515215968614_1001336073620991220_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kXV_hP3bEaQAX9CgQki&_nc_ht=scontent.fdac24-2.fna&oh=00_AT8QE2zMWZFkMmjzToHTPcxy_VD6itFIaF3oTUj9B5CBLA&oe=63134C36" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Mahir Sadman
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem> */}


    </List >
  );
}
