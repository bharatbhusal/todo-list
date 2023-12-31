// Functional component for rendering an individual todo item
export default function TodoItem({ completed, id, title, category, setTodos, toList }) {
    // Function to toggle the completion status of a todo
    function toggleTodo(id, completed) {
        console.log("toggle called");
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) return { ...todo, completed };
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

        <li>

            <label>
                {/* Checkbox for marking the todo as completed */}
                <input type="checkbox" checked={completed} onChange={(e) => toggleTodo(id, e.target.checked)} />
                {/* Display the title of the todo */}
                {title}
            </label>

            {/* Button to delete the todo */}
            <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
                Delete
            </button>

        </li>


    );
}
