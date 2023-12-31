// Functional component for rendering an individual todo item
export default function TodoItem({ completed, id, title, category, setTodos, toList }) {
    // Function to toggle the completion status of a todo
    function toggleTodo(id) {
        console.log("toggle called");
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) return {
                    ...todo, completed: completed ? false : true
                };
                return todo;
            });
        });
    }

    // Function to delete a todo
    function deleteTodo(id) {
        console.log("delete called");
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id);
        });
    }

    // Rendering the todo item
    return (

        <li className={completed === true ? "completed" : ""} onClick={() => toggleTodo(id)}>
            <div className={`title ${completed === true ? "completed" : ""}`}>{title}</div>
            {/* Button to delete the todo */}
            <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
                Delete
            </button>

        </li>


    );
}
