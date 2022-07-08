import { useState } from "react";

function Counter({ init }) {
    
    const [count, setCount] = useState(init);

    function handleCounter(value) {
        setCount(value);
    }

    return (
        <div>
            <h1>Counter:{count}</h1>

            <button disabled={count == 10} onClick={() => {

                handleCounter(count + 1);
            }}>
                Add
            </button>

            <button disabled={count == 0} onClick={() => {
                handleCounter(count - 1);
            }}
            >
                Subtract
            </button>

            <button onClick={() => {
                handleCounter(count * 2);
            }} >
                Double
            </button>
        </div>
    )
}


export { Counter };