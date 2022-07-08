import logo from "./logo.svg";
import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <div>
        <Card
          date={"28/10/2020"}
          heading1={"Amazon Gift"}
          heading2={"Pay"}
          screen={"Desktop - Mobile"}
          logo={"https://pngimg.com/uploads/amazon/amazon_PNG26.png"}
          color={"orange"}
        />
      </div>
      <div>
        <Card
          date={"28/10/2020"}
          heading1={"Amazon Gift"}
          heading2={"Pay"}
          screen={"Desktop - Mobile"}
          logo={"https://pngimg.com/uploads/amazon/amazon_PNG26.png"}
          color={"orange"}
        />
      </div>
      <div>
        <Card
          date={"17 Sept 2020"}
          heading1={"Apple Gift"}
          heading2={"Payment"}
          screen={"MacOS - Mobile"}
          logo={
            "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          }
          color={"lightgrey"}
        />
      </div>
    </div>
  );
}

export default App;
