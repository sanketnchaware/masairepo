
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { UsersList } from "./components/UsersList";
import { UserDetails } from './components/UserDetails';


function App() {
  return (
    <div className="App">

      <Navbar />
      {/* Routes */}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/About">
          <About />
        </Route>

        <Route path="/Contact">
          <Contact />
        </Route>

        <Route exact path="/Users">
          <UsersList />
        </Route>

        <Route path="/user/:id">
          <UserDetails />
        </Route>


        <Route >
          <h1>Page not found Error 404</h1>
        </Route >

      </Switch>

      {/* Routes */}



    </div>
  );
}

export default App;
