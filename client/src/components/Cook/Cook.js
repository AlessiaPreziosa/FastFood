import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Order from "./Order";
import Home from "../Home";


class Cook extends React.Component {

    render() {
        return(
            <>
                <Navbar/>
                <Routes>
                    <Route path="" element={<Order/>}/>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </>
        )
    }
}


export default Cook;