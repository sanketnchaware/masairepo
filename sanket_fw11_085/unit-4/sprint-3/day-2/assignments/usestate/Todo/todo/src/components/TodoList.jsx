import "../styles/todo_list.css";

const TodoList = ({ list, handleToggle }) => {
    return (
        <>
            {
                list.map((item) => (

                    <div >
                        <div className="title_status_btn_div" key={item.id}>

                            <div>
                               {item.title}
                            </div>

                            <div>
                                {item.status ? "Done" : "NotDone"}
                            </div>

                            <div className="toggle_btn_div">
                                <button onClick={() => {
                                    handleToggle(item.id)
                                }}>Toggle Status</button>
                            </div>



                        </div>



                    </div>

                ))
            }
        </>
    )
}

export { TodoList };