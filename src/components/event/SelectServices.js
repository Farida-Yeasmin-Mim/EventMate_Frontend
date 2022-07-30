import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DecorationCard from '../cards/Decoration';
import {Button} from '@mui/material';
import { Link as RLink } from "react-router-dom";
 
 
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
 
export default function SelectServices() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={3} >
        <Grid item xs={6} md={4} >
          <DecorationCard></DecorationCard>
        </Grid>
        <Grid item xs={6} md={4}>
          <DecorationCard></DecorationCard>
        </Grid>
        <Grid item xs={6} md={4}>
          <DecorationCard></DecorationCard>
        </Grid>
        <Grid item xs={6} md={4}>
          <DecorationCard></DecorationCard>
        </Grid>
        <Grid item xs={6} md={4}>
          <DecorationCard></DecorationCard>
        </Grid>
        <Grid item xs={6} md={4}>
          <DecorationCard/>
        </Grid>
      </Grid>
      <RLink to="/Order_details" style={{ textDecoration: 'none' }}><Button variant="contained">Next</Button></RLink>

    </Box>
  );
}
