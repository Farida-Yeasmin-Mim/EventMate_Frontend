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
import { useParams } from 'react-router-dom';



function Dashboard() {
    const { id } = useParams();
    return (
        <div>
            <div className="container">
                <Sidebar vendorId={id} />
                <Home vendorId={id} />
            </div>
        </div>

    );
}
export default Dashboard;