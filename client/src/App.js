import React from "react";
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/products">
          <Products/>
        </Route>
        <Route exact path="/products/:id">
          {/* Individual Product Page will go here */}
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route>
          <NoMatch/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
