import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import './styles/user.css'
import Topbar from "./Topbar";


function CompanyDetails() {

  return (

      <div className="container">
        <Sidebar />



        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle">Edit Company Details</h1>
          </div>
          <div className="userContainer">


            <div className="userShow">
              <div className="userShowTop">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">The Wedding Co.</span>
                  <span className="userShowUserTitle">Wedding Decoration</span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                  <PermIdentity className="userShowIcon" />
                  <span className="userShowInfoTitle">wedding co.</span>
                </div>
                <div className="userShowInfo">
                  <CalendarToday className="userShowIcon" />
                  <span className="userShowInfoTitle">1.11.2000</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                  <PhoneAndroid className="userShowIcon" />
                  <span className="userShowInfoTitle">0135739275</span>
                </div>
                <div className="userShowInfo">
                  <MailOutline className="userShowIcon" />
                  <span className="userShowInfoTitle">wedding.co@gmail.com</span>
                </div>
                <div className="userShowInfo">
                  <LocationSearching className="userShowIcon" />
                  <span className="userShowInfoTitle">Gulshan | Bangladesh</span>
                </div>
              </div>
            </div>


            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">


                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Company Name</label>
                    <input
                      type="text"
                      placeholder="The Wedding Co."
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Company Details</label>
                    <input
                      type="text"
                      placeholder="Wedding decorations"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="annabeck99@gmail.com"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input
                      type="text"
                      placeholder="0193658382"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="Mirpur | Bangladesh"
                      className="userUpdateInput"
                    />
                  </div>
                </div>


                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src="https://i.pinimg.com/736x/f7/a4/0d/f7a40d421ba4c1f3924d6f6d85427e2f.jpg"
                      alt=""
                    />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="userUpdateButton">Update</button>
                </div>


              </form>
            </div>
          </div>
        </div>


      </div>

  );
}
export default CompanyDetails;