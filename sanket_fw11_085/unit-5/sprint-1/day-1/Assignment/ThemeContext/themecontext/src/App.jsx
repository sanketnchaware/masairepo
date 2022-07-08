
import './App.css';
import { ThemeContext } from './contexts/ThemeContext';
import { useContext } from 'react';




function App() {
  const { theme, styles, handleTheme } = useContext(ThemeContext);


  return (
    <div style={theme === "light" ? styles.light : styles.dark} className="App">

      <div className="mode">
        <button>Home</button>
        <button>About</button>
        <button onClick={() => {
          handleTheme("dark");
        }} >Change theme {theme}</button>


        <form  action="">
          <input type="text" placeholder="name" />
          <input type="password" placeholder="password" />
          <button>Submit</button>
        </form>

      </div>


    </div>
  );
}

export default App;
