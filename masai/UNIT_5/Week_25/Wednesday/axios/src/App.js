import logo from "./logo.svg";
import "./App.css";

import { useState,useEffect } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  console.log("weather:", weather);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  async function getData(city) {
    try {
      const response = await axios.get(
        ` http://api.weatherapi.com/v1/current.json?key=03a4e7b0a2c141efa08113033210812&q=${city}`
      );
      console.log(response.data);
      setWeather(response.data.current);
    } catch (error) {
      console.error(error);
    }
  }

  

  return (
    <div className="App">
      <h1>Weather Application</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={handleChange}
      />

      <input
        type="submit"
        value="Find"
        onClick={() => {
          getData(city);
        }}
      />
    </div>
  );
}

export default App;
