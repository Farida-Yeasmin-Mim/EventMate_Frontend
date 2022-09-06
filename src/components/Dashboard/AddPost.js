import { TextField } from '@mui/material';
import Sidebar from './Sidebar';
import './styles/newProduct.css'
import './styles/newUser.css'


function AddPost() {

    return (

        <div>
            <div className="container">
                <Sidebar />


                <div className="newUser">
                    <h1 className="newUserTitle">Add New Posts</h1><br /><br />


                    <form className="newUserForm">

                        <div className="newUserItem">
                            <TextField
                                label='Title'
                                name="build"
                                fullWidth
                            /><br />
                        </div>

                        <div className="newUserItem">
                            <TextField
                                label='Caption'
                                name="build"
                                fullWidth
                            /><br />
                        </div>

                        <div className="newUserItem">
                            <TextField
                                label='Details'
                                name="build"
                                fullWidth
                            /><br />
                        </div>

                        <div className="newUserItem">
                            <TextField
                                label='Time'
                                name="build"
                                fullWidth
                            /><br />
                        </div>


                        <button className="newUserButton">Create</button>
                    </form>
                </div>






            </div>
        </div>
    );
}

export default AddPost;