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

    // useEffect(() => {
    //     console.log("in use effect");

    //     axios.post('logout')
    //         // .then(response => setResult({ info: response.data}))
    //         .then(response => setResult(response.data))
    //         .catch(error => {
    //             //this.setResult({ errorMessage: error.message });
    //             console.error('There was an error!', error);
    //     });
    //     console.log(result.data);
    //     // localStorage.clear();
    //     navigate('/');
    // },[]);

    async function logout(){
        console.log("in logout")
        // axios.post('https://guarded-beach-16980.herokuapp.com/api/login', item,  {headers})
        // axios.post('login',item, {headers})
        //const token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzAwNzVjZTA3YmE5Y2VkY2JhYjY1YWRkYzMwZTNiZDc3NzJjMDYxYmMyYzZkZWRjNzRlMzdlMzhiOTNjYzkzYWVlN2U5NGMzNDk2ZDNhNDUiLCJpYXQiOjE2NTg0ODI5NDguMTI0MTQ2LCJuYmYiOjE2NTg0ODI5NDguMTI0MTUxLCJleHAiOjE2OTAwMTg5NDguMDQyODQxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.gtM24-8K6l3h5NmZxD2qkyxYLUad-4gcAL9gST3WvC-fPQoSYGXY91E_qWH_QaMXcsmEelhBAeLTrFYddDD-obakJT-TaA4J9KUFBp7Td5lRO6EC9yc-xMZ3J6g3Le0kzLkiUcJVFQDFu2aTJX7tudqUexCcWoXIXNonMUl7e6DY254TkF-tDOvS6LQRovqiRsVXEwyi6Nh6peg_HZq2tC1AY8fEUTKmosj-HAfj3y3WQtdAoiy5B497JaAjl9iV2K-cnY-9vVAZfiREy5MfCywEr263QIUyc7pgTPmSvvLGf6ZHmZBifT3mcxwzCU_7tvT6K9z5wYmd6Dq0-4kZAoViAh104zxauJ84SBziGzNaZMe5-PoYhPDOfSbla1RMpCU_RxJM6c9RoIoMRvITbjt6AOpx9fIQOBRjVJrJDZG5BPAQqPQ6rvi-Wz1n4rVPZEtx8sQA-JpC_He6io7Uf876aTgHUzgjkqWduA78CYZBJUopmHGAGVInr6oystYsYAhOfPeIuPJdBiRg9hsisnAitPVxV3Bnx3euZctRF1PeqrZn7OhT5RV2Q4xyHHFzkmzxBh6C5DVum-p1k0nF4FkwB4PF7lU5ewusDPg4odOZC03q5jrprSwdQGctz9pPAk5EI1F7eUWH9gx_uzaDv47RNhx3gxG1JrSajPsLBPc"
        // const headers = { 
        //         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzU0NzhkMWRjZDJjNzBmOTc2NjIyNDIwODBhYTkyZDczY2YzZGM4ZGE5ZWEyMWVmZjgxYjc0MDk5YTAzODExMWJkMGIxMGU3YzZiNzlkNmMiLCJpYXQiOjE2NTg0ODM2MDkuMzk1NjcxLCJuYmYiOjE2NTg0ODM2MDkuMzk1Njc0LCJleHAiOjE2OTAwMTk2MDkuMjY5NTM1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.zB6Kf5Qa8Rq_Y5Pd6jLVZt8Kk_r3v19IWZ3hDmlZdKJ6TlFdMMQIOhGFg8eenYOsyUCo6V_myeFGRmmQFyrYVeHbd-bFBAwk2eJBFPhediySlC93sbxCpZ1K57rIGp9Us_LKdS0WvdHOrC7FrtqAHrr7HdrLHm2W9DebPLmYzq_ZfrF4il2XxmaslXgQLFJD2nSfTk3D2lsZxavPM3PdnP-EXwTXnkQygVjX60CQdowSN6OubyeaExFEFNcNMTA8WRkliNSjZNgokzrg3iJ2glbzfEHpYBmVCFqP5uVRsC-NAwXAr01xqo_l-53Ams0iRsRftX5o_so3gyKPxoQY_bdJTGsPLaKLRgRA38J8zEG2hAyHQx0B3yYJ1jS4DR7vDguxmvniIjTo-zGaDL1NccLZdtcl_cI7mAG9Dnvt3hJfjkiUyGRhpjKh21v_CsHzNO-bjrbXsvRfi5UVhPnDIncaRTmwu0LlFB1tLJuPChz18Vx4hl2fJn2Z4XOSaTKt15jqj7qpJ0oG8gO6olge4eaBGhBcdbFFiqF2sKP-i2yKZF___EGhUiufvsskDhr4IxRHzwoepr5CdaKT6N1sK2w0w8dar3sGVKQb1ZLb57ewFFHdVk53DMzwl6c4Vm03LBApkfYVzvbzINXfGAoFenr-lPn7X8mX03McUT9FC1s"
        //     };
        axios.post('logout')
            .then((response) => {
                console.log("in then")
                setResult(response.data)
                navigate('/');
            })
            .catch(error => {
                //this.setResult({ errorMessage: error.message });
                console.error('There was an error!', error);
        });

        //navigate('/feed'); 

    }

    return (
        <div>
            <Button onClick={logout} type='submit' variant="contained"  fullWidth>Log out</Button>

        </div>
    )
}
export default Logout;