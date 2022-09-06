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
import './styles/dashboard.css'



function Dashboard() {

    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Home />
            </div>
        </div>

    );
}
export default Dashboard;