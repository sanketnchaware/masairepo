import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Users } from "./components/Users";
import { Navbar } from "./components/Navbar";
import { UserDetails } from "./components/UserDetails";
import { Login } from "./components/Login";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <PrivateRoute exact path="/about">
          <About />
        </PrivateRoute>

        

        <Route exact path="/users" component={Users} />

        <PrivateRoute exact path="/user/:id" push={false}>
          <UserDetails />
        </PrivateRoute>

        <Route exact path="/login" component={Login} />
        <Route>Error 404: Page not found</Route>
      </Switch>
    </div>
  );
}

export default App;
