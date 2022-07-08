import "./App.css";
import { useState } from "react";
import { Todo } from "./components/Todo";

function App() {
  // if need to render nothing:-
  // if (counter == 5) {
  //   return null;
  // }

  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
