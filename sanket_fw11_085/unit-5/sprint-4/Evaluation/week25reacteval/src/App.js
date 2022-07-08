import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Route, Switch, Link } from "react-router-dom";
import { Electronics } from "./components/Electronics";
import { Jewelary } from "./components/Jewelary";
import { Login } from "./components/Login";
import { Men } from "./components/Men";
import { Women } from "./components/Women";

function App() {
  return (
    <div className="App">

     

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Electronics">
          <Electronics />
        </Route>
        <Route exact path="/Jewelary">
          <Jewelary />
        </Route>
        <Route exact path="/Men">
          <Men />
        </Route>
        <Route exact path="/Women">
          <Women />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>

        
      </Switch>
    </div>
  );
}

export default App;
