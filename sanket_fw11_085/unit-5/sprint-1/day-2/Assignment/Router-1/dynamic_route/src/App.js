import "./App.css";
import { Navbar } from "./components/Navbar";
import { Switch, Link, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { ProductDetails } from "./components/ProductDetails";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Products">
          <Products />
        </Route>
        <Route exact path="/product/:id">
          <ProductDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
