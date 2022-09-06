// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from '../pages/auth/Login';
// import Logout from '../pages/auth/Logout';
// import Signup from '../pages/auth/Signup';
// // import Home from '../pages/Home';
// import CreateEvent from './event/CreateEvent';
// import OrderDetails from './event/OrderDetails';
// import SelectServices from './event/SelectServices';
// import Feed from './feed/Feed';
// import Navbar from './Navbar';
// // import Dashboard from './vendor/Dashboard';
// import Vendor_reg from './vendor/RegVendor';
// import Offer from './Offer';
// import ProductCategories from './productcategories';
// import AddDecorationsForm from '../pages/services/addDecorationsForm';
// // import HeaderComponent from './AdminDashboard/HeaderComponent';
// import { createTheme, ThemeProvider } from '@mui/material';
// import { orange } from '@mui/material/colors';


// import Chart from './Dashboard/Charts';
// import FeaturedInfo from './Dashboard/FeaturedInfo';
// import Sidebar from './Dashboard/Sidebar';
// import Topbar from './Dashboard/Topbar';
// import WidgetLg from './Dashboard/WidgetLg';
// import WidgetSm from './Dashboard/WidgetSm';
// import Home from './Dashboard/Home';
// import UserList from './Dashboard/UserList';
// import User from './Dashboard/User';
// import Product from './Dashboard/Product';
// import ProductList from './Dashboard/ProductList';
// import Dashboard from './Dashboard/Dashboard';
// import NewUser from './Dashboard/NewUser';
// import NewProduct from './Dashboard/NewProduct';
// import PostItem from './feed/PostItem';
// import ProductDetails from './ProductDetails/ProductDetails';
// import HorizontalStepper from './feed/HorizontalStepper';
// import LowerList from './feed/LowerList';
// import UpperList from './feed/UpperList';
// import RightList from './feed/RightList';

// import FilterPage from './event/filter/FilterPage';
// // import ServiceDetails from './event/ServiceDetails.js';
// import FilterPage2 from './event/Photography/FilterPage2';
// import FilterPage3 from './event/Music/FilterPage3';




// const theme = createTheme({
//   status: {
//     danger: orange[500],
//   },
// });


// function AppRouter(props) {

//   return (
//     <Router>
//       <Navbar />
//       <ThemeProvider theme={theme}>

//         <Routes>
//           {/* <<<<<<< HEAD
//                 <Route path="/" exact element={<Home />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/logout" element={<Logout />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/feed" element={<Feed />} />
//                 <Route path="/vendor_reg" element={<Vendor_reg />} />
//                 <Route path="/vendor_dashboard" element={<Dashboard />} />
//                 <Route path="/event_create" element={<CreateEvent />} />
//                 <Route path="/productcategories" element={<ProductCategories />} />
//                 <Route path="/select_services" element={<SelectServices />} />
//                 <Route path="/Order_details" element={<OrderDetails />} />
//                 <Route path="/Offer" element={<Offer />} />
//                 <Route path="/addDecorationsForm" element={<AddDecorationsForm />} />
//                 <Route path="/filterpage" element={<FilterPage />} />
//                 <Route path="/service_details/:id" element={<ServiceDetails />} />




//             </Routes>

//         </Router>
// ======= */}
//           <Route path="/" exact element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/logout" element={<Logout />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/feed" element={<Feed />} />
//           <Route path="/vendor_reg" element={<Vendor_reg />} />
//           {/* <Route path="/vendor_dashboard" element={<Dashboard/>} /> */}
//           <Route path="/event_create" element={<CreateEvent />} />
//           <Route path="/productcategories" element={<ProductCategories />} />
//           <Route path="/select_services" element={<SelectServices />} />
//           <Route path="/Order_details" element={<OrderDetails />} />
//           <Route path="/Offer" element={<Offer />} />
//           <Route path="/addDecorationsForm" element={<AddDecorationsForm />} />
//           <Route path="/post" element={<PostItem />} />
//           <Route path="/productDetails" element={<ProductDetails />} />
//           <Route path="/stepper" element={<HorizontalStepper />} />
//           <Route path="/lowerlist" element={<LowerList />} />
//           <Route path="/upperlist" element={<UpperList />} />
//           <Route path="/Rightlist" element={<RightList />} />
//           {/* <Route path="/HeaderComponent" element={<HeaderComponent/>}  />  */}
//           <Route path="/decoration" element={<FilterPage />} />
//           <Route path="/photography" element={<FilterPage2 />} />
//           <Route path="/music" element={<FilterPage3 />} />


//           {/* Dashboard */}
//           <Route path="/charts" element={<Chart />} />
//           <Route path="/featuredInfo" element={<FeaturedInfo />} />
//           <Route path="/sidebar" element={<Sidebar />} />
//           <Route path="/topbar" element={<Topbar />} />
//           <Route path="/widgetLg" element={<WidgetLg />} />
//           <Route path="/widgetSm" element={<WidgetSm />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/userList" element={<UserList />} />
//           <Route path="/dashboard_user" element={<User />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="/productList" element={<ProductList />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/newUser" element={<NewUser />} />
//           <Route path="/newproduct" element={<NewProduct />} />

//           {/* path="url" element="file name" */}


//         </Routes>
//       </ThemeProvider>
//     </Router>
//     // >>>>>>> a3c438ce3bb0fa4054ef49dc6f7e178c0483fe57
//   );
// }

// export default AppRouter;

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
// import Dashboard from './vendor/Dashboard';
import Vendor_reg from './vendor/RegVendor';
import Offer from './Offer';
import ProductCategories from './productcategories';
import AddDecorationsForm from '../pages/services/addDecorationsForm';
// import HeaderComponent from './AdminDashboard/HeaderComponent';
import { createTheme, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';


import Chart from './Dashboard/Charts';
import FeaturedInfo from './Dashboard/FeaturedInfo';
import Sidebar from './Dashboard/Sidebar';
import Topbar from './Dashboard/Topbar';
import WidgetLg from './Dashboard/WidgetLg';
import WidgetSm from './Dashboard/WidgetSm';
// import Home from './Dashboard/Home';
import UserList from './Dashboard/UserList';
import User from './Dashboard/User';
import Product from './Dashboard/Product';
import ProductList from './Dashboard/ProductList';
import Dashboard from './Dashboard/Dashboard';
import NewUser from './Dashboard/NewUser';
import NewProduct from './Dashboard/NewProduct';
import PostItem from './feed/PostItem';
import ProductDetails from './ProductDetails/ProductDetails';
import HorizontalStepper from './feed/HorizontalStepper';
import LowerList from './feed/LowerList';
import UpperList from './feed/UpperList';
import RightList from './feed/RightList';

import FilterPage from './event/filter/FilterPage';
import FilterPage2 from './event/Photography/FilterPage2';
import FilterPage3 from './event/Music/FilterPage3';
import DecorationFilter from './event/filter/DecorationFilter';
import ServiceDetails from './event/ServiceDetails';




const theme = createTheme({
  status: {
    danger: orange[500],
  },
});


function AppRouter(props) {

  return (

    <Router>
      {/* <Navbar /> */}
      <Topbar />
      <ThemeProvider theme={theme}>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/vendor_reg" element={<Vendor_reg />} />
          {/* <Route path="/vendor_dashboard" element={<Dashboard/>} /> */}
          <Route path="/event_create" element={<CreateEvent />} />
          <Route path="/productcategories" element={<ProductCategories />} />
          <Route path="/select_services" element={<SelectServices />} />
          <Route path="/Order_details" element={<OrderDetails />} />
          <Route path="/Offer" element={<Offer />} />
          <Route path="/addDecorationsForm" element={<AddDecorationsForm />} />
          <Route path="/post" element={<PostItem />} />
          <Route path="/stepper" element={<HorizontalStepper />} />
          <Route path="/lowerlist" element={<LowerList />} />
          <Route path="/upperlist" element={<UpperList />} />
          <Route path="/Rightlist" element={<RightList />} />
          {/* <Route path="/HeaderComponent" element={<HeaderComponent/>}  />  */}
          <Route path="/decoration" element={<DecorationFilter />} />
          <Route path="/photography" element={<FilterPage2 />} />
          <Route path="/music" element={<FilterPage3 />} />
          <Route path="/filterpage" element={<FilterPage />} />
          <Route path="/service_details/:id" element={<ServiceDetails />} />
          <Route path="/prodect_details/:id" element={<ProductDetails />} />


          {/* Dashboard */}
          <Route path="/charts" element={<Chart />} />
          <Route path="/featuredInfo" element={<FeaturedInfo />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/topbar" element={<Topbar />} />
          <Route path="/widgetLg" element={<WidgetLg />} />
          <Route path="/widgetSm" element={<WidgetSm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/dashboard_user" element={<User />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/newproduct" element={<NewProduct />} />

          {/* path="url" element="file name" */}


        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default AppRouter;