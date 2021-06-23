import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Contact from './pages/Contact';
import M from 'materialize-css'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    // <Router>
    //   <Route exact path="/" component={Home} />
    //   <Route exact path="/login" component={Login} />
    //   <Route exact path="/register" component={Register} />
    //   <Route exact path="/products" component={Products} />
    //   <Route exact path="/contact" component={Contact} />
    // </Router>
  );
}

export default App;
