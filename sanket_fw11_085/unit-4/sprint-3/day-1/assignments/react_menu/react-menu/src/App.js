import "./App.css";
import { JoinUs } from "./components/JoinUs";
import { Login } from "./components/Login";
import { Settings } from "./components/Settings";
import { ContactUs } from "./components/ContactUs";
import { Search } from "./components/Search";
import { Help } from "./components/Help";
import { Home } from "./components/Home";
import { Download } from "./components/Download";
import { Buttons } from "./components/Buttons";

function App() {
  return (
    <div id="container">
      <h1>Using</h1>
      <h1> Different Components</h1>
      <JoinUs />
      <Settings />
      <Login />
      <ContactUs />
      <Search />
      <Help />
      <Home />
      <Download />

      <h1>Using</h1>
      <h1>Props</h1>

      <Buttons name={"JOIN US"} color={"blue"} />
      <Buttons name={"SETTINGS"} color={"grey"} />
      <Buttons name={"LOGIN"} color={"orange"} />
      <Buttons name={"CONTACT US"} color={"red"} />
      <Buttons name={"SEARCH"} color={"green"} />
      <Buttons name={"HELP"} color={"violet"} />
      <Buttons name={"HOME"} color={"pink"} />
      <Buttons name={"DOWNLOAD"} color={"teal"} />
    </div>
  );
}

export default App;
