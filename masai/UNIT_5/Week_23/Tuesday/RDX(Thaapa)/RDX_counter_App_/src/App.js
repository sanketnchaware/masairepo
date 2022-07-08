import React from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(decNumber(5));
        }}
      >
        -
      </button>
      <input type="text" value={myState} />
      <button
        onClick={() => {
          dispatch(incNumber(5));
        }}
      >
        +
      </button>
    </div>
  );
};

export default App;
