import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [city, setCity] = useState("");
  console.log('city:', city)

  const [weather, setWeather] = useState([])

  const handleChange = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  }

  useEffect(() => {
    getWeather();
  }, [])

  async function getWeather() {
    const res =await axios("https://api.openweathermap.org/data/2.5/forecast?q=risod&appid=feef8efc37c9f5c7adfc56848292733f");
    console.log(res.data);
  }


  return (
    <div className="App">


      {/* Search input box div */}
      <div className="Search_div">
        <img className="logos" src="https://cdn-icons.flaticon.com/png/128/450/premium/450016.png?token=exp=1641833165~hmac=aeb720d1717bb263636e25ed87aa0a24" alt="" />

        <input type="text" placeholder="Search City.." className="search-box"

          onChange={handleChange} />

        <img className="logos" src="https://cdn-icons.flaticon.com/png/512/3031/premium/3031293.png?token=exp=1641833198~hmac=eed6a191a699ab0b8c3b5d72fdc24b35" alt="" />

      </div>



      {/* Weather data div */}
      <div className="main_container">

      </div>


    </div>
  );
}

export default App;
