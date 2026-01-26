import React from "react";
import { useState } from "react";


const Textbox = function (props) {

    const[show, setShow] = useState(false);
    let type = "text";
    if (props.eye===true && show===false) type="password";



    let eye = null;
    if (props.eye===true){
        eye=(
            <span className="eye" onClick={()=>setShow(!show)}> 👁️</span>
        );
    }



    // let eyebutton = null;
    // if(props.eye===true){
    //     eyebutton = <span className="eye">👁️</span>
    // }


    return (
        <>
            <div className="input-wrapper">

            <input type={type} placeholder={props.place} className="textbox" />

            {eye}


            </div>
            

        </>
    )
};

export default Textbox;