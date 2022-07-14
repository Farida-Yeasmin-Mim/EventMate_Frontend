//import logo from './logo.svg';
import './App.css';
//import Login from './pages/auth/login';
//import Signup from './pages/auth/signup';
//import Registration from './pages/vendor/registration';
import Navbar from './components/navbar';
import Offer from './components/offer';
import ProductCategories from './components/productcategories';
import IconTabs from './components/icontabs';
//import DecorationCard from './components/cards/decoration';
import Services from './components/services';



function App() {
  return (
    <div className="App">

      {/* <Login></Login> 
      <Signup></Signup>
      <Registration></Registration> 
      <DecorationCard></DecorationCard> */}
      

      

      


      <Navbar> </Navbar>
      <IconTabs></IconTabs>
      
      <Services></Services>
      <Offer></Offer> 
      <ProductCategories></ProductCategories>
      





    </div>
  );
}

export default App;
