import { createContext } from "react";
import {useState} from 'react'
export const ThemeContext = createContext();


export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const handleTheme = (changeTheme) => {
        if (theme === "light") {
            setTheme(changeTheme);
        } else {
            setTheme("light");
        }
    }

    return <ThemeContext.Provider value={{theme, handleTheme}}>
        {children}
    </ThemeContext.Provider>
}
