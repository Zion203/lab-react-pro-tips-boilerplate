import React from "react";
import { Link } from "react-router-dom";

const Navbar =()=>{
    return (
     <>
        <div id="nav">
            <Link to="/forms" >Registration</Link>
            <Link to="/contacts">Contact</Link>
        </div>
     </>   
    )
}

export default Navbar;