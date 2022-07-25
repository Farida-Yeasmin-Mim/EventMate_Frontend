import {React, useEffect} from 'react';
import axios from 'axios';

function PostRequest(props) {

    useEffect(() => {
        return ()=>console.log("ok");
    },[]);
    // console.log("props");

    return (
        <div>
            <h1>Hello,</h1>           
        </div>
    );
}

export default PostRequest;