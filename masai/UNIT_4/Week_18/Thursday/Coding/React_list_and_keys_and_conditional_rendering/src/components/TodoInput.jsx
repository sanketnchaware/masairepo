import { useState } from "react";
import { nanoid } from 'nanoid';

function TodoInput({ handleAddTodo }) {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleClick = () => {
        setText("");

        const data = {
            id: nanoid(4),
            title: text,
            status: false

        }
        handleAddTodo(data)
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Todos"
                value={text}
                onChange={handleChange}
            />

            <button onClick={handleClick}>Add Todo</button>



        </div>
    )
}

export { TodoInput }