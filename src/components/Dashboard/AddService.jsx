import { TextField } from '@mui/material';
import Sidebar from './Sidebar';
import './styles/newProduct.css'
import './styles/newUser.css'
import Topbar from './Topbar';


function AddService() {

  return (

    <div>
      <div className="container">
        <Sidebar />

        
        <div className="newUser">
      <h1 className="newUserTitle">Add New Services</h1><br/><br/>
      
      
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Service name</label>
          <input type="text" placeholder="Wedding" />
        </div>

        <div className="newUserItem">
          <label>Location</label>
          <input type="text" placeholder="Mirpur" />
        </div>

        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+880-1 123 456 78" />
        </div>

        <div className="newUserItem">
          <label>Max Guest No.</label>
          <input type="text" placeholder="500" />
        </div>

        <div className="newUserItem">
          <label>Required Space</label>
          <input type="text" placeholder="space" />
        </div>

        <div className="newUserItem">
          <label>Price</label>
          <input type="text" placeholder="5000" />
        </div>

        <div className="newUserItem">
          <label>Inform Time</label>
          <input type="text" placeholder="7 Sept" />
        </div>

        <div className="newUserItem">
          <label>Build Time</label>
          <input type="text" placeholder="1 Nov" />
        </div>

        <div className="newUserItem">
          <label>Offered Colour</label>
          <input type="text" placeholder="Red" />
        </div>

        
        <div className="newUserItem">
          <label>Decoration Type</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Wedding</option>
            <option value="no">Birthday</option>
            <option value="no">Proposal</option>
          </select>
        </div>

        <button className="newUserButton">Create</button>
      </form>
    </div>

        
      </div>
    </div>
  );
}

export default AddService;