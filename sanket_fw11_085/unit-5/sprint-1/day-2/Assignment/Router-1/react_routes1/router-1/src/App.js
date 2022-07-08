import React from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

import { Home } from "./Components/Home/Home";
import { Contact } from "./Components/Contact/Contact";
import { About } from "./Components/About/About";

import { Services } from "./Components/Services/Services";
import { Login } from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/about-us">
          <About />
        </Route>

        <Route path="/services">
          <Services />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
