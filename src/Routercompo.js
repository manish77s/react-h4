import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "./Homecompo";
import Student from "./StudentCompo";
import Contact from "./Contactus";



function Router(){
    return(
    
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/student" element={<Student/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>

       
      
    )
}
export default Router;
