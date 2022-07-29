import React from 'react';
import Pusher from "pusher-js"
import Echo from 'laravel-echo';

function Notification(props) {

    const options = {
        broadcaster: 'pusher',
        // key: config.pusher.key,
        key: "5b9c0add29710ce63a0d",
        cluster: "ap2",
        forceTLS: "false",
        //authEndpoint is your apiUrl + /broadcasting/auth
        authEndpoint: "http://127.0.0.1:8000/broadcasting/auth", 
        // As I'm using JWT tokens, I need to manually set up the headers.
        auth: {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            Accept: 'application/json',
          },
        },
      };
    const userId = 2;
    const echo = new Echo(options);
    echo.private(`App.User.${userId}`).notification((data) => {
        console.log(data.comment.body);
        window.alert(data.comment.body);
    });
    return (
        <div>
            
        </div>
    );
}

export default Notification;