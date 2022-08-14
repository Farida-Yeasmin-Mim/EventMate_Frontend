import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import PostAddSharpIcon from '@mui/icons-material/PostAddSharp';
import NotificationsActiveSharpIcon from '@mui/icons-material/NotificationsActiveSharp';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import { useStyles } from "./HeaderStyle";
import { NavLink } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText, Button } from "@mui/material";


export default function SidenavData({ handleDrawerClose }) {
    const classes = useStyles();
    const listItemData = [
        { label: "Dashobard", link: "/", icon: <DashboardIcon /> },
        { label: "Blog Post", link: "/blog", icon: <BookIcon /> },
        { label: "Link 1", link: "/link", icon: <PostAddSharpIcon /> },
        {label: "Notification", link: "/notification", icon: <NotificationsActiveSharpIcon />},
        { label: "Logout", link: "/logout", icon: <ExitToAppSharpIcon /> },
    ];


    return (
        <List>
            {listItemData.map((item, i) => (
                <Button
                    size='small'
                    className={classes.navButton}
                    onClick={() => handleDrawerClose()}
                    key={i}>

                    <ListItem
                        exact
                        component={NavLink}
                        to={item.link}
                        className={classes.navlinks}
                        activeClassName={classes.activeNavlinks}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>{item.label}</ListItemText>
                    </ListItem>


                </Button>
            ))}
        </List>
    );
}