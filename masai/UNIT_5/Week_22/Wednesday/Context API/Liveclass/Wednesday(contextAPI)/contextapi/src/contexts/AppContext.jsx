import { createContext } from "react";
import { useState } from "react";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [state, setState] = useState("dumyy");

    const handleChange = (change) => {
        if (state === "dummy") {
            setState(change);
        }
        else { setState("dummy"); }
    }
    return <AppContext.Provider value={{ state, handleChange }}>
        {children}
    </AppContext.Provider>
}


export { AppContextProvider, AppContext }