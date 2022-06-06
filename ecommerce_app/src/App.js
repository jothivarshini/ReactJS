import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Home from "./component/Home";
import Electronics from "./component/Electronics";
import Footer from "./component/Footer";
import './component/font-awesome.css';
import './component/popuo.css';
import './component/menu.css';
import './component/bootstrap.css';
import './App.css';
import About from "./component/About";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <Router>
          <Navbar />
              <Routes>
                  <Route path="/Home" element={ <Home/> } />
                  <Route path="/About" element={ <About/> } />
                  <Route path="/Contact" element={ <Contact/> } />
                  <Route path="/Electronics" element={ <Electronics/>} />
              </Routes>
        </Router>
        </div>
        
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
    
  );
}

export default App;
