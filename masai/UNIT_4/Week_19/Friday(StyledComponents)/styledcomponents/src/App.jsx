import "./App.css";
import { Button, Div } from "./components/custom/Button";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div div className="App" >

      <Div theme={theme}>
        <Button theme={theme} >Click Me</Button>

        <input type="text" placeholder="Enter the name" />

        <button onClick={() => {
          if (theme == "light") {
            setTheme("dark");
          }
          else {
            setTheme("light");
          }
        }} >Toggle Theme</button>
      </Div>


    </div>
  )
}

export default App;
