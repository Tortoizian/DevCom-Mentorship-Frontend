import React from "react";
import { useState } from "react";
import Textbox from './Textbox';


const Login = function(){
    return(
        <div className="logincontainercontainer">

        <div className="logincontainer">   
        <h1 className="loginheading">Login</h1>
        
        <Textbox place="Email ID" />
        
        <Textbox place="Password" eye={true}/>
        
        
        <p className="fp">Forgot Password?</p>
        
        <button className="loginbutton">Log In</button>
        
        <p className="signup">Don't have an account? Sign Up</p>

        </div>


        </div>
    )
};

export default Login;