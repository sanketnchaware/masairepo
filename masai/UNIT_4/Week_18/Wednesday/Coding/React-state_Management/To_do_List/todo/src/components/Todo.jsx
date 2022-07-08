import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

function Todo() {
    const [list, setList] = useState([]);

    const handleAddTodo = (text) => {
        setList([...list, text])
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

    return (<div>
        <TodoInput handleAddTodo={handleAddTodo} />
        <TodoList todo_list={list} handleToggle={handleToggle} />
    </div>)

}

export { Todo }