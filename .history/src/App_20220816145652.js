//import logo from './logo.svg';
import './App.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Registration from './components/vendor/RegVendor';
import Offer from './components/Offer';
import ProductCategories from './components/productcategories';
import IconTabs from './components/icontabs';
//import DecorationCard from './components/cards/decoration';
import Services from './components/services';
import AddDecorationsForm from './pages/services/addDecorationsForm';
//import Home from './pages/Home';
import Navbar from './components/Navbar';
import Feed from './components/feed/Feed';
import Dashboard from './components/vendor/Dashboard';
import CreateEvent from './components/event/CreateEvent';
import OrderDetails from './components/event/OrderDetails';
import AppRouter from './components/AppRouter';
import FilterPage from './components/event/filter/FilterPage';
import Notification from './components/Notification';
import SearchBar from './components/event/filter/SearchBar';




function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      {/* 
      
      

      <Services></Services>
      <Offer></Offer>

      <Login></Login>
      <Signup></Signup>
      <Registration></Registration> 
      <AddDecorationsForm></AddDecorationsForm> */}



    {/* <DecorationCard></DecorationCard>  */}
    {/* <ProductCategories></ProductCategories> */}
    {/* <Navbar/>   */}
    {/* <Home/> */}
    {/* <Feed/> */}
    {/* <Dashboard/> */}
    {/* <CreateEvent/> */}
    {/* <OrderDetails/> */}  
    {/* <Home/> */}
    {/* <SearchBar/> */}
      
      {/* <AppRouter /> */}
      {/* */}
      {/* <IconTabs/> */}
      
      <Notification/>
      <AppRouter/>
      {/* <Home/>  */}
     {/* <FilterPage/> */}

     </LocalizationProvider>
    </div>
  );
}

export default App;
