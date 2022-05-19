import logo from './logo.svg';
import {Route, Link} from 'react-router-dom'
import { Switch } from "react-router-dom";
import './App.css';
import Home from "./component/Home";
import About from "./component/About";
import Messages from "./component/Messages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Welcome to React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Learn React
        </a>
      </header>
      <div className="menu">
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/messages">Messages</Link> </li>
            <li> <Link to="/about">About</Link> </li>
          </ul>
      </div>
      <div className="App-intro">
           <Switch>
             <Route path="/">
                 <Home/>
             </Route>
             <Route path="/About">
                 <About/>
             </Route>
             <Route path="/Messages">
                 <Messages/>
             </Route>
           </Switch>
        </div>
    </div>
  );
}
export default App;