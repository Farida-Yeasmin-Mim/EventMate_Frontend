//import logo from './logo.svg';
import './App.css';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import Registration from './pages/vendor/registration';
import Navbar from './components/navbar';
import Offer from './components/offer';
import ProductCategories from './components/productcategories';
import IconTabs from './components/icontabs';
//import DecorationCard from './components/cards/decoration';
import Services from './components/services';
import AddDecorationsForm from './pages/services/addDecorationsForm';




function App() {
  return (
    <div className="App">


      <Navbar> </Navbar>
      <IconTabs></IconTabs>

      <Services></Services>
      <Offer></Offer>

      <Login></Login>
      <Signup></Signup>
      <Registration></Registration> 
      <AddDecorationsForm></AddDecorationsForm>

      
      
      {/* <DecorationCard></DecorationCard>  */}
      <ProductCategories></ProductCategories>
      
      


    </div>
  );
}

export default App;
