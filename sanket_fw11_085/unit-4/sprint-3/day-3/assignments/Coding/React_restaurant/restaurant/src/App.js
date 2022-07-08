
import './App.css';
import {data} from "./data"
import {RestaurantDetails} from "./components/RestaurantDetails"

function App() {
  return (
    <div className="App">
      <RestaurantDetails data={data}/>
    </div>
  );
}

export default App;
