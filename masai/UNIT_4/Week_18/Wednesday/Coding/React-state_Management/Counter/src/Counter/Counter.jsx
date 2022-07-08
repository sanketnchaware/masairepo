import { useState } from "react";

const Counter = ({init}) => {

    const [count, setCount] = useState(init);
    function handleClick(value) {
        setCount(value)
    }


    return (
        <div>
            <h1>Counter:{count}</h1>

            <button
                // disabled={count == 10}
                onClick={() => { handleClick(count + 1) }}>Add
            </button>

            <button
                // disabled={count == 0}
                onClick={() => { handleClick(count - 1) }}>Sub
            </button>

        </div>
    )
}

export { Counter };