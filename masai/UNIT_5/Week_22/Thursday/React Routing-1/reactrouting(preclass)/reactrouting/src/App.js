import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component="components/Home.jsx" />
      </Switch>
    </>
  );
}

export default App;
