import { TodoInput } from './TodoInput.jsx';
import { useState } from 'react';
import { TodoList } from './TodoList.jsx';
import "../styles/todo.css";
function Todo() {

    const [list, setList] = useState([]);

    const handleAddTodo = (data) => {
        
        setList([...list, data]);

    }

    const handleToggle = (id) => {
        const toggledList = list.map(item => {
            if (item.id === id) {
                item.status = !item.status;
            }
            return item;
        })
        setList(toggledList);
    }

    return (
        <>

            <div className="todo_container">
                <div className="List">
                    <h1>Todo List</h1>
                    <TodoList list={list} handleToggle={handleToggle}  />
                </div>


                <div className="Input">
                    <TodoInput handleAddTodo={handleAddTodo} />
                </div>



            </div>



        </>
    );
}

export { Todo };