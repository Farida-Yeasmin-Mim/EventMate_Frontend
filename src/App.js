//import logo from './logo.svg';
import './App.css';
//import Login from './pages/auth/login';
//import Signup from './pages/auth/signup';
//import Registration from './pages/vendor/registration';
import Navbar from './components/navbar';
import DrawerComponent from './components/Drawer';
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">

      {/* <Login></Login> 
      <Signup></Signup> */}
      {/* <Registration></Registration> */}
      {/* <Navbar></Navbar> */}

      <Router>
      <Navbar />
      
    </Router>





    </div>
  );
}

export default App;
