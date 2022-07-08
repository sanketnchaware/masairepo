
import "./App.css";
import { useCallback, useEffect, useState } from 'react'
import axios from "axios";
function App() {
  const [search, setSearch] = useState([])
  console.log('search:', search)

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func.apply(context, args);
      }, 1000);
    }
  }
  const handleChange = (e) => {
    getData(e.target.value);
  }

  const Optimise = useCallback(debounce(handleChange), [])

  async function getData(name) {
    if (name.length < 3) {
      setSearch([])
      return false;
    }
    console.log(name)
    const res = await axios(`http://localhost:3000/countries?q=${name}`);
    setSearch(res.data)
  }






  return (
    <div className="App">
      <h1>Debouncing</h1>
      <input type="text" placeholder="Search for country"
        onChange={Optimise} />


      {search &&
        <div className="result">
          {search.map((item) => {
            return <div>
              <p>{item.country}</p>
              
            </div>
          })}
        </div>

      }

    </div>



  );
}

export default App;
