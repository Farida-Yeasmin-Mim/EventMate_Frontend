import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NewProduct from "./NewProduct";
import NewUser from "./NewUser";
import Product from "./Product";
import ProductList from "./ProductList";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import User from "./User";
import UserList from "./UserList";



function Dashboard() {
  
    return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser/>} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default Dashboard;