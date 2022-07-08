
import { useContext } from 'react';
import { AppContext } from "../contexts/AppContext"

export const Third = () => {

    const { state, handleChange } = useContext(AppContext);

    return <div>
        Third component
        <h1>State is {state}</h1>
        <button onClick={() => {
            handleChange("Third")
        }}>Change state</button>
    </div>
}