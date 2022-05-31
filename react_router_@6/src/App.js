import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
          <Router>
              <Routes>
                  <Route path="/" element={ <Home/> } />
                  <Route path="/about" element={ <About/> } />
                  <Route path="/contact" element={ <Contact/> } />
              </Routes>
          </Router>
    </div>
  );
}

export default App;






