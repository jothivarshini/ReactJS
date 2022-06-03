import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Home from "./component/Home";
import Carousel from "./component/Carousel";
import MiddleSection from "./component/MiddleSection";
import './component/font-awesome.css';
import './component/popuo.css';
import './component/menu.css';
import './component/bootstrap.css'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Navbar />
          <Carousel/>
        </div>
        <div>
        <Router>
              <Routes>
                  <Route path="/" element={ <Home/> } />
              </Routes>
          </Router>
        </div>
      </header>
      
    </div>
  );
}

export default App;
