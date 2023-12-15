import React from 'react';
import './App.css'
import Home from '../src/components/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import CookPage from "./components/Cook/Cook";

class App extends React.Component {

  render() {
    return(
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}/>
                <Route path="/admin/*" element={<Admin />}/>
                <Route path="/cook/*" element={<CookPage />}/>
            </Routes>
          </BrowserRouter>
        </>
    )
  }
}


export default App;
