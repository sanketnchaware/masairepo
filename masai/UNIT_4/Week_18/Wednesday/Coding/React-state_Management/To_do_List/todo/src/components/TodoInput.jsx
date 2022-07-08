import { useState } from "react";
import { nanoid } from 'nanoid'

const TodoInput = ({ handleAddTodo }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleClick = () => { 
        setText('');
        const data = {
            id: nanoid(5),
            title: text,
            status: false
        }
        handleAddTodo(data);
    }

    return (
        <div>

            <h1>Todo List</h1>

            <input
                type="text"
                placeholder="Add tasks"
                value={text}
                onChange={handleChange}
            />
            <button
                onClick={handleClick}
            >Add to List</button>

        </div>
    )
}
export { TodoInput }