import { makeStyles } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { blue } from "@mui/material/colors";

export const useStyles = makeStyles((theme) => ({

    //SideNav
  drawerPaper: {
    width: "250px",
    marginTop: "65px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
  navlinks: {
    color: blueGrey["A400"],
    "& :hover , &:hover div": {
      color: blue["A200"],
    },
    " & div": {
      color: blueGrey["A400"],
    },
  },
  activeNavlinks: {
    color: blue["A700"],
    "& div": {
      color: blue["A700"],
    },
  },
  navButton: {
    width: " 100%",
    textTransform: "capitalize",
  },
}));