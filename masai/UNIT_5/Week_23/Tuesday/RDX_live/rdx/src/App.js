import logo from "./logo.svg";
import "./App.css";
import { store } from "./store/store";
function App() {
  console.log(store.getState());

  return (
    <div className="App">
      <h1>Count:{store.getState().count}</h1>
      <button
        onClick={() => {
          store.dispatch(AddCount(1));
        }}
      >
        Add 1
      </button>
      <button>Sub 1</button>
    </div>
  );
}

export default App;
