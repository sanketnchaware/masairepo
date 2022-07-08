
const TodoList = ({ todo_list, handleToggle }) => {
    return (



        <div>
            {
                todo_list.map((item) => (
                    <h1 key={item.id}>
                        {item.title}-{item.status ? 'done' : 'not done'}
                        <button onClick={() => { handleToggle(item.id) }}>Toggle Status</button>
                    </h1>
                ))
            }

        </div>
    )
}

export { TodoList }