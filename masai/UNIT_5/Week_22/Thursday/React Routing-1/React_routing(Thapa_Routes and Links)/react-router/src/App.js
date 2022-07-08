import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Route, Switch, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavLink exact activeClassName="link1" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="link2" to="/About">
        About
      </NavLink>
      <NavLink exact activeClassName="link3" to="/Contact">
        Contact
      </NavLink>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Contact" component={Contact} />
        <Route>Error</Route>
      </Switch>
    </div>
  );
}

export default App;
