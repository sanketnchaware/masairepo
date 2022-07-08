import "./App.css";
import React from "react";
import { useState } from "react";
import { First } from "./components/First";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import { useEffect } from "react";

function App() {
  const { token, handleToken } = useContext(AuthContext);


  if (!token) {
    return <div className="App">
      <h1>Please Login</h1>
      <input type="text" />
      <input type="password" />
      <button onClick={() => {
        handleToken("QpwL5tke4Pnpja7X4")
      }}  >Submit</button>
    </div>
  }
  else {
    return (
      <div className="App">
        <First />
      </div>
    );
  }


}

export default App;
