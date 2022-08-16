import React from "react";
import './styles/topbar.css'
import { NotificationsNone, Language, Settings } from "@mui/icons-material";


function Topbar() {
  
    return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">EventMate</span>
        </div>
        
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://avatars.githubusercontent.com/u/76836136?s=400&u=6b029a033204aea30687591bedb424dcbfbea46a&v=4" alt="" className="topAvatar" />
        </div>


      </div>
    </div>
  );
}
export default Topbar;