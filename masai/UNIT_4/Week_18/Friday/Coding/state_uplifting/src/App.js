import "./App.css";

import { useState } from "react";

import { Test } from "./components/Test";

function App() {

  const [state, setState] = useState("");

  return (

    <div className="App">

      <Test />

    </div>

  );
  
}

export default App;
