import React from "react";
import { Routes, Route } from "react-router-dom";
import Forms from "./Component/Forms";
import Home from "./Component/Home";
import Contacts from "./Component/Contacts";

const AllRoutes =()=>{
    return (
     <>
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/forms" element={<Forms />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>

     </Routes>
     </>   
    )
}

export default AllRoutes;