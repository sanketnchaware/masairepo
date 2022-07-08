
const TodoList = ({ todo_list, handleToggle }) => {
    return (
        <div>
            {
                todo_list.map((item) => (
                    <h1 key={item.id}>
                        {item.title}-{item.status ? "Done" : "Not Done"}
                        <button
                            onClick={() => {
                                handleToggle(item.id);
                            }}
                        >Toggle status</button>
                    </h1>
                ))
            }

        </div>
    )
}

export { TodoList }