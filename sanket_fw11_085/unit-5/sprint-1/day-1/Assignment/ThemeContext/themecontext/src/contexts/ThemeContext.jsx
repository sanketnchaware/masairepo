import { createContext } from 'react';
import { styles } from '../styles';
import { useState } from 'react'


const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const handleTheme = (changeTheme) => {
        if (theme == "light") {
            setTheme(changeTheme);
        }
        else {
            setTheme("light");
        }

    }

    return <ThemeContext.Provider value={{styles, theme, handleTheme}} >
        {children}
    </ThemeContext.Provider>
}


export { ThemeContext, ThemeContextProvider };