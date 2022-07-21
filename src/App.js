//import logo from './logo.svg';
import './App.css';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import Registration from './components/vendor/registration';
import Offer from './components/offer';
import ProductCategories from './components/productcategories';
import IconTabs from './components/icontabs';
//import DecorationCard from './components/cards/decoration';
import Services from './components/services';
import AddDecorationsForm from './pages/services/addDecorationsForm';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Feed from './components/feed/Feed';
import Dashboard from './components/vendor/Dashboard';
import CreateEvent from './components/event/CreateEvent';
import OrderDetails from './components/event/OrderDetails';




function App() {
  return (
    <div className="App">

{/* 
      <Navbar> </Navbar>
      <IconTabs></IconTabs>

      <Services></Services>
      <Offer></Offer>

      <Login></Login>
      <Signup></Signup>
      <Registration></Registration> 
       <AddDecorationsForm></AddDecorationsForm>  */}
       

      
      
      {/* <DecorationCard></DecorationCard>  */}
      {/* <ProductCategories></ProductCategories> */}
    <Navbar/>  
    {/* <Home/> */}
    {/* <Feed/> */}
    {/* <Dashboard/> 
    <OrderDetails/> */}
    <CreateEvent/>
    
   

    </div>
  );
}

export default App;
