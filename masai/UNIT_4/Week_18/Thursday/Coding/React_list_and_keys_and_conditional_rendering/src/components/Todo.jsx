import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

function Todo() {
    const [list, setList] = useState([]);

    const handleAddTodo = (text) => {
        setList([...list, text])
    }

    const handleToggle = (id) => {
        const updated_list = list.map(item => {
            if (item.id == id) {
                item.status = !item.status;
            }
            return item;
        })
        setList(updated_list);
    }

    return (<div>
        <TodoInput handleAddTodo={handleAddTodo} />
        <TodoList todo_list={list} handleToggle={handleToggle} />
        <button onClick={() => {

            const updated_lst = list.filter((item) => !item.status);
            console.log('updated_lst:', updated_lst)
            setList(updated_lst);

        }}>Show not completed</button>

        

    </div>)



}

export { Todo }