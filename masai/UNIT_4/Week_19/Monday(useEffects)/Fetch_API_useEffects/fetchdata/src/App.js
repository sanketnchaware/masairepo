import logo from "./logo.svg";
import "./App.css";
import { FetchApi } from "./components/FetchApi";

function App() {
  return (
    <div className="App">
      <h1>GitHub users</h1>
      <FetchApi />
    </div>
  );
}

export default App;
