import "./App.css";
import { AuthContext } from "./Contexts/AuthContext";
import { useContext, useState } from "react";

function App() {
  const { token, handleToken } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  if (!token) {
    return (
      <div className="App">
        <h1>Please Login</h1>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(name, password);

            fetch("https://reqres.in/api/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name: name, password: password }),
            })
              .then((res) => res.json())
              .then((token) => {
                handleToken(token);
              });
          }}
        >
          Submit
        </button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <button
          onClick={() => {
            handleToken("");
          }}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default App;
