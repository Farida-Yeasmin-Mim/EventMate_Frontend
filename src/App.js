//import logo from './logo.svg';
import './App.css';
//import Login from './pages/auth/login';
//import Signup from './pages/auth/signup';
//import Registration from './pages/vendor/registration';
import Navbar from './components/navbar';
//import Offer from './components/offer';
//import ProductCategories from './components/productcategories';
import IconTabs from './components/icontabs';
//import DecorationCard from './components/cards/decoration';
//import Services from './components/services';
import AddDecorationsForm from './pages/services/addDecorationsForm';
//import SelectTextFields from './components/cards/selectTextField';



function App() {
  return (
    <div className="App">

      {/*  
      <Signup></Signup>
      <Registration></Registration> 
      <Login></Login>
      <Offer></Offer>
      <Services></Services>
      <DecorationCard></DecorationCard> 
      <ProductCategories></ProductCategories> */}
      

      

      <Navbar> </Navbar>
      <IconTabs></IconTabs>
      <AddDecorationsForm></AddDecorationsForm>
      {/* <SelectTextFields></SelectTextFields> */}
      
      
       
      
      
      





    </div>
  );
}

export default App;
