import React from 'react';
import {Link} from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import axios from 'axios';

export default function Signup() {

//Gets the data and sumbits it for a post request
const submit = (data) => {

  axios.post('https://node-api-minhc.herokuapp.com/auth/signup',{
    name:data.username,
    email:data.email,
    password:data.password
  })
  .then(function(response){
      console.log(response)

    //This is responsible for the page navigation.
    if (response.data.status) window.location.replace('/login');
  });
};



  //alert("Response is : " + this.state.response);
  return(
    <div align="top">
      <h1>Registration Page</h1>
      <RegistrationForm  submit={submit}/>
        <p id="status"></p>
        <Link to="/login" className="button">Back to Login</Link>

    </div>

  );

}

