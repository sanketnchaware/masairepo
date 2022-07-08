import "./App.css";
import Forms from "./components/Forms";

function App() {
  return (
    <div className="App">
      <Forms
        onSubmit={(e) => {
          e.preventDefault();
          console.log("signing in");
        }}
      >
        <input type="text" placeholder="signIn" />
        <input type="submit" value="signIn" />
      </Forms>
      <Forms
        onSubmit={(e) => {
          e.preventDefault();
          console.log("signing UP");
        }}
      >
        <input type="text" placeholder="SignUP" />
        <input type="submit" value="signUp" />
      </Forms>
    </div>
  );
}

export default App;
