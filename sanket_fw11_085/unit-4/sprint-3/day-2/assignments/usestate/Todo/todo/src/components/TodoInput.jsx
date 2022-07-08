
import { useState } from 'react';
import { nanoid } from 'nanoid';
import "../styles/todo_input.css";

const TodoInput = ({ handleAddTodo }) => {
    const [text, setText] = useState('');

    const handleClick = () => {

        const data = {
            title: text,
            status: false,
            id: nanoid()
        }
        handleAddTodo(data);
        setText('');
    }

    return (

        <>


            <div className="todoinput_container">

                <div className="input_section">
                    <input
                        type="text"
                        value={text}
                        placeholder="Enter Task"
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>

                <div className="button_section">
                    <button onClick={handleClick}>➕</button>
                </div>


            </div>



        </>
    )
}
export { TodoInput }