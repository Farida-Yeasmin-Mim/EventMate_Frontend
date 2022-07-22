import React, {useState, useEffect} from 'react';
import { Grid, Paper, Avatar, TextField, Link, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const Logout = () => {
    
    const [result, setResult]= useState(" "); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.post('logout')
            // .then(response => setResult({ info: response.data}))
            .then(response => setResult(response.data))
            .catch(error => {
                //this.setResult({ errorMessage: error.message });
                console.error('There was an error!', error);
        });
        console.log(result.data);
        localStorage.clear();
        navigate('/');
    });
    // async function logout(){
    //     // console.warn(username, password)
    //     let item = {
    //         email: username, 
    //         password: password
    //     };

    //     // const headers = { 
    //     //     "Content-Type": "application/json",
    //     //     "Accept": "application/json",
    //     // };
        
    //     // axios.post('https://guarded-beach-16980.herokuapp.com/api/login', item,  {headers})
    //     // axios.post('login',item, {headers})
    //     axios.post('login',item)
    //         // .then(response => setResult({ info: response.data}))
    //         .then(response => setResult(response.data))
    //         .catch(error => {
    //             //this.setResult({ errorMessage: error.message });
    //             console.error('There was an error!', error);
    //     });
    //     console.log(result.data);
    //     console.log("Token " + result.token);
    //     localStorage.setItem("user-name", result.data.name)
    //     localStorage.setItem("token", result.token)
    //     //navigate('/feed'); 

    //}

    return (
        <div>
            
        </div>
    )
}
export default Logout;