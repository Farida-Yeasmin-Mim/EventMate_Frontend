import './styles/sidebar.css'
import { Link } from "react-router-dom";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import DynamicFeedTwoToneIcon from '@mui/icons-material/DynamicFeedTwoTone';
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone';
import WorkOutlineTwoToneIcon from '@mui/icons-material/WorkOutlineTwoTone';
import ReportGmailerrorredTwoToneIcon from '@mui/icons-material/ReportGmailerrorredTwoTone';
import Topbar from './Topbar';
import { useState, useEffect } from "react";
import axios from 'axios';



function Sidebar(param) {
    const [vendor, setVendor] = useState([]);

    useEffect(() => {
        const link = 'vendors/' + param.vendorId
        axios.get(link)
            .then((response) => {
                setVendor(response.data.data);
                console.log(vendor);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);
    return (

        <div className="sidebar">
            <div className="sidebarWrapper">


                {/* Dashboard */}
                <div className="sidebarMenu">
                    <h2 >{vendor.name}</h2><br />
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to={"/dashboard/" + vendor.id} className="link">
                            <li className="sidebarListItem active">
                                <LineStyleIcon className="sidebarIcon" />
                                Home
                            </li>
                        </Link>

                        <Link to="/productList" className="link">
                            <li className="sidebarListItem">
                                <TimelineIcon className="sidebarIcon" />
                                Analytics
                            </li>
                        </Link>

                        {/* <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon" />
                            Sales
                        </li> */}
                    </ul>
                </div>

                {/* Events Menu */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Events</h3>
                    <ul className="sidebarList">
                        <Link to="/dashboard_user" className="link">
                            <li className="sidebarListItem">
                                <PermIdentityTwoToneIcon className="sidebarIcon" />
                                Pending
                            </li>
                        </Link>
                        <Link to="/product" className="link">
                            <li className="sidebarListItem">
                                <StorefrontTwoToneIcon className="sidebarIcon" />
                                Accepted
                            </li>
                        </Link>
                        <Link to="/product" className="link">
                            <li className="sidebarListItem">
                                <StorefrontTwoToneIcon className="sidebarIcon" />
                                Previous
                            </li>
                        </Link>
                    </ul>
                </div>

                {/* Edit Menu */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Edit</h3>
                    <ul className="sidebarList">
                        <Link to="/dashboard_user" className="link">
                            <li className="sidebarListItem">
                                <PermIdentityTwoToneIcon className="sidebarIcon" />
                                Company Details
                            </li>
                        </Link>
                        <Link to="/product" className="link">
                            <li className="sidebarListItem">
                                <StorefrontTwoToneIcon className="sidebarIcon" />
                                Add Service
                            </li>
                        </Link>
                        <Link to="/product" className="link">
                            <li className="sidebarListItem">
                                <StorefrontTwoToneIcon className="sidebarIcon" />
                                Add Post
                            </li>
                        </Link>
                    </ul>
                </div>


                {/* Quick Menu */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/userList" className="link">
                            <li className="sidebarListItem">
                                <PermIdentityTwoToneIcon className="sidebarIcon" />
                                Service List
                            </li>
                        </Link>
                        <Link to="/productList" className="link">
                            <li className="sidebarListItem">
                                <StorefrontTwoToneIcon className="sidebarIcon" />
                                Post List
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoneyTwoToneIcon className="sidebarIcon" />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyTwoToneIcon className="sidebarIcon" />
                            Notifications
                        </li>

                    </ul>
                </div>


                {/* Notifications */}
                {/* <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineTwoToneIcon className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedTwoToneIcon className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineTwoToneIcon className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div> */}


                {/* Staff */}
                {/* <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <Link to="/newUser" className="link">
                            <li className="sidebarListItem">
                                <WorkOutlineTwoToneIcon className="sidebarIcon" />
                                Manage
                            </li>
                        </Link>

                        <Link to="/newProduct" className="link">
                            <li className="sidebarListItem">
                                <TimelineIcon className="sidebarIcon" />
                                Analytics
                            </li>
                        </Link>

                        <li className="sidebarListItem">
                            <ReportGmailerrorredTwoToneIcon className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div> */}


            </div>
        </div>
    );
}
export default Sidebar;