import React from 'react';
import {Link} from "react-router-dom";
import LoginForm from "./LoginForm";
import axios from 'axios';

export default function Login() {

  //This gets the data and sends it as a post request
  const submit = (data) => {
  
      //alert("username: " + data.username);
      //This calls the URL to submit the post request.
      axios.post('https://node-api-minhc.herokuapp.com/auth/login',{
        email: data.email,
        password: data.password
      })
      .then(function(response){
        console.log(response);
        var email = response.data.email;
        if (email) window.location.replace('/');
      });
    };
  
    return(
  
        <div>
            <h1>Login Page</h1>
            <LoginForm submit={submit}/>
            <p id="status"></p>
            <p>Make a new account? Right here.</p>
            <Link to="/signup" className="button">Registration</Link>
        </div>
  
      );
  }
  
