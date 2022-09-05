
// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import { Grid } from '@mui/material';
// import CartSide from './CartSide';
// import DecorationFilter from './DecorationFilter';

// <<<<<<< HEAD
// export default function ScrollableTabsButtonAuto() {
//     const [value, setValue] = React.useState(0);
// =======
// const FilterPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null); /* create and set the variable using useState*/
//   const [selectedRating, setSelectedRating] = useState(null);
//   const [selectedPrice, setSelectedPrice] = useState([2000, 50000]);
//   const [list, setList] = useState(dataList);   /* dataList is defined in constants.js */
//   const [searchInput, setSearchInput] = useState('');
//   const [resultsFound, setResultsFound] = useState(true);
// >>>>>>> a3c438ce3bb0fa4054ef49dc6f7e178c0483fe57

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <Grid container style={{ background: '#fff', margin: '0 0' }}>
//             <Grid item spacing={2}>
//                 <h2 style={{ color: "#000", textAlign: "center", padding: "10px 20px", background: '#fff' }}>Service Types</h2>

//             </Grid>
//             <Grid item spacing={8}>

//                 <Box sx={{ maxWidth: { xs: 320, sm: 780 }, bgcolor: 'background.paper' }}>
//                     <Tabs
//                         value={value}
//                         onChange={handleChange}
//                         variant="scrollable"
//                         scrollButtons="auto"
//                         aria-label="scrollable auto tabs example"
//                     >
//                         <Tab label="Decorations"><DecorationFilter /></Tab>
//                         <Tab label="Photography" />
//                         <Tab label="Music" />
//                         <Tab label="Item Four" />
//                         <Tab label="Item Five" />
//                         <Tab label="Item Six" />
//                         <Tab label="Item Seven" />
//                     </Tabs>
//                 </Box>
//             </Grid>
//             <Grid item spacing={2} style={{ background: '#fff', padding: '10px 20px' }}>
//                 <CartSide />
//             </Grid>

//         </Grid>

//     );
// }
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DecorationFilter from './DecorationFilter';
import { Grid } from '@mui/material';
import CartSide from './CartSide';
import './FilterPage.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function FilterPage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{ padding: '0 0', width: '100%' }}>

            <Grid container style={{ background: '#fff', margin: '0 0', padding: '0 0' }}>
                <Grid item xs={2}>
                    <h2 className="serviceTypes" style={{ color: "#000", textAlign: "center", padding: "10px 20px", background: '#fff' }}>Service Types</h2>
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ maxWidth: { xs: 320, sm: 780 }, bgcolor: 'background.paper' }} >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"

                        >
                            <Tab label="Decoration" {...a11yProps(0)} />
                            <Tab label="Photography" {...a11yProps(1)} />
                            <Tab label="Music" {...a11yProps(2)} />
                            <Tab label="Cake" {...a11yProps(3)} />
                            <Tab label="Transport" {...a11yProps(4)} />
                            <Tab label="Location" {...a11yProps(5)} />
                            <Tab label="Catering" {...a11yProps(6)} />
                            <Tab label="Mehedi" {...a11yProps(7)} />
                            <Tab label="Video" {...a11yProps(8)} />
                            <Tab label="Dance choreography" {...a11yProps(9)} />
                        </Tabs>
                    </Box>
                </Grid>
                <Grid item xs={2} style={{ background: '#fff', padding: '10px 20px' }}>
                    <CartSide />
                </Grid>
            </Grid>
            <TabPanel value={value} index={0}>
                <DecorationFilter />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </div>
    );
}
