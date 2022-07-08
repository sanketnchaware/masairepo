import "./App.css";
import { Todo } from "./components/Todo";
import logo from "./logo.svg";
function App() {
  return (
    <>
      <div className="app_container">
        <img src={logo} className="App-logo" alt="logo" />
        <Todo />
      </div>
    </>
  );
}

export default App;
