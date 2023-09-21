export default function TodoItem({ completed, id, title, setTodos }) {

    function toggleTodo(id, completed) {
        console.log("toggle called")
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) return { ...todo, completed }
                return todo
            })
        })
    }

    function deleteTodo(id) {
        console.log("delte called")
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }
    return (
        <li >
            <label>
                <input type="checkbox" checked={completed} onChange={(e) => toggleTodo(id, e.target.checked)} />
                {title}
            </label>
            <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    )
}