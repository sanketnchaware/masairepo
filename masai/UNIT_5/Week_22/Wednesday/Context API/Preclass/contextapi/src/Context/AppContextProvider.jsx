import React from 'react'

const AppContext = React.createContext()

const AppContextProvider = () => {
    return (
        <AppContext.Provider>{Children}</AppContext.Provider>
    )
}

export { AppContextProvider }