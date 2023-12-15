import React from 'react';
import {Route, Routes} from "react-router-dom";
import Menu from "./Menu";
import MenuAdd from "./MenuAdd";
import MenuUpdate from "./MenuUpdate";
import Navbar from "./Navbar";
import Home from "../Home";

class Admin extends React.Component {

    render() {
        return(
            <>
                <Navbar/>
                <Routes>
                    <Route path="" element={<Menu />}/>
                    <Route path="add" element={<MenuAdd />}/>
                    <Route path="update" element={<MenuUpdate />}/>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </>
        )
    }
}


export default Admin;