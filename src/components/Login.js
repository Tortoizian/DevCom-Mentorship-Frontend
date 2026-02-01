import React from "react";
import { useState } from "react";
import Textbox from './Textbox';
// import getCookie from './csrfcookie';

// const csrf = getCookie('csrftoken')

const Login = function(props){
    const [rollNo, setRollNo] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div className="logincontainercontainer">

        <div className="logincontainer">   
        <h1 className="loginheading">Login</h1>
        
        <Textbox place="Roll No." id="inputemail" value={rollNo} onChange={(e)=>setRollNo(e.target.value)}/>
        
        <Textbox place="Password" eye={true} value={password} onChange={(e)=>setPassword(e.target.value)}/>
        
        
        <p className="fp">Forgot Password?</p>
        
        <button className="loginbutton" onClick={async ()=>{
            console.log(rollNo);
            console.log(password);
			try{
				const response = await fetch("http://127.0.0.1:8000/login/",{
					method: 'POST',
					headers:{'Content-Type': 'application/json'},
					body: JSON.stringify({"rollno":rollNo,"password":password})
								
				});
				const data = await response.json();
				console.log(data);
				if(data["success"]) props.SetWebpage(2);
				else alert("Incorrect Details");
			}catch{
				alert("Could not fetch details, Please try again...");
			}
		
            



        }}>Log In</button>
        
        <p className="signup">Don't have an account? Sign Up</p>

        </div>


        </div>
    )
};

export default Login;

// //{
//   "rollno": "23CS101",
//   "password": "mypassword123",
//   "re_password": "mypassword123",
// "student_dept":"aero",
// "email":"random@gmail.com",
// "student_name":"divesh"
// }