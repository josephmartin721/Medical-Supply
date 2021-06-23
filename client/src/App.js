import React from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'
import M from 'materialize-css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
      <Switch>
        <Route exact path="/register" component={Register} />
      </Switch>
      <Switch>
        <Route exact path="/products" component={Products} />
      </Switch>
      <Switch>
        
      </Switch>
      <Switch>
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Switch>
        
      </Switch>
      </div>
    </Router>
  );
}

export default App;
