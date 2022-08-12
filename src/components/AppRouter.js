import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/auth/Login';
import Logout from '../pages/auth/Logout';
import Signup from '../pages/auth/Signup';
import Home from '../pages/Home';
import CreateEvent from './event/CreateEvent';
import OrderDetails from './event/OrderDetails';
import SelectServices from './event/SelectServices';
import Feed from './feed/Feed';
import Navbar from './Navbar';
import Dashboard from './vendor/Dashboard';
import Vendor_reg from './vendor/RegVendor';
import Offer from './Offer';
import ProductCategories from './productcategories';
import AddDecorationsForm from '../pages/services/addDecorationsForm';
import FilterPage from './event/filter/FilterPage';
import DashboardPage from './Dashboard/DashboardPage';



function AppRouter(props) {
    return (
        <Router>
            
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/feed" element={<Feed/>} />
                <Route path="/vendor_reg" element={<Vendor_reg/>} />
                <Route path="/vendor_dashboard" element={<Dashboard/>} />
                <Route path="/event_create" element={<CreateEvent/>} />
                <Route path="/productcategories" element={<ProductCategories/>} /> 
                <Route path="/select_services" element={<SelectServices/>} />
                <Route path="/Order_details" element={<OrderDetails/>} />
                <Route path="/Offer" element={<Offer/>} />
                <Route path="/addDecorationsForm" element={<AddDecorationsForm/>} />
                <Route path="/filterpage" element={<FilterPage/>} />
                <Route path="/DashboardPage" element={<DashboardPage/>} />
                                    
                {/* path="file name" element="file function" */}

                
            </Routes>
           
      </Router>
    );
}

export default AppRouter;