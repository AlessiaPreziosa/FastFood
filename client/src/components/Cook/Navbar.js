import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
    return (
        <ul className="NavBar">
            <li className="Navigator" style={{float:"right"}}>
                <Link to="/">Logout</Link>
            </li>
        </ul>
    );
}
export default Navbar;