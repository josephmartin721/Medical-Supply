import React, { useState } from "react";
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import ProductId from "./pages/ProductId";
import Footer from "./components/Footer";

import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div>
      <Navbar />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path="/login">
          {loggedIn ? <Redirect to="/" /> : <Login setLoggedIn={setLoggedIn} />}
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/products">
          <Products/>
        </Route>
        <Route exact path="/products/:id" component={ProductId}/>
          {/* <ProductId/>
        </Route> */}
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route>
          <NoMatch/>
        </Route>
      </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
