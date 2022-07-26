//import logo from './logo.svg';
import './App.css';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Registration from './components/vendor/RegVendor';
import Offer from './components/Offer';
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
import AppRouter from './components/AppRouter';
import SearchBar from './components/event/filter/SearchBar';
import FilterPanel from './components/event/filter/FilterPanel';
import List from './components/event/filter/List';




function App() {
  return (
    <div className="App">

      {/* 
      
      <IconTabs></IconTabs>

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
      <AppRouter />



      <div className="home">
        {/* Search Bar */}
        <SearchBar />



        <div className="home_panelList-wrap">
          <div className="home_panel-wrap">
            {/* Filter Panel */}
            <FilterPanel />

          </div>


          <div className="home_list-wrap">
            {/* List */}
            <List />
          </div>


        </div>
      
      
      </div>



    </div>
  );
}

export default App;
