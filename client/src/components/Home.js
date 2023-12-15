import React from 'react';
import {  Link } from "react-router-dom";
const Home= () =>{
    return (
        <div className="Login">
            <li className="LogCard">
                <Link to="/admin">Login da amministratore!</Link>
            </li>
            <li className="LogCard">
                <Link to="/cook">Login da cuoco!</Link>
            </li>
        </div>
    );
}
export default Home;