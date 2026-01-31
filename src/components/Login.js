import React from "react";
import { useState } from "react";
import Textbox from './Textbox';
// import getCookie from './csrfcookie';

// const csrf = getCookie('csrftoken')

const Login = function(){
    return(
        <div className="logincontainercontainer">

        <div className="logincontainer">   
        <h1 className="loginheading">Login</h1>
        
        <Textbox place="Email ID" />
        
        <Textbox place="Password" eye={true}/>
        
        
        <p className="fp">Forgot Password?</p>
        
        <button className="loginbutton" onClick={async ()=>{
            const response = await fetch("http://127.0.0.1:8000/login/",{
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({"rollno":'25b001',"password":"abc"})
                            
            });
            console.log(response)
            



        }}>Log In</button>
        
        <p className="signup">Don't have an account? Sign Up</p>

        </div>


        </div>
    )
};

export default Login;