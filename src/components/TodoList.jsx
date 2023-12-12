import TodoItem from "./TodoItem";

// Functional component for rendering a list of todo items
export default function TodoList({ todos, setTodos }) {

    return (
        <>
            {/* Header for the todo list */}
            <h1 className="header">Todo List</h1>

            {/* List of todo items */}
            <ul className="list">
                {/* Display a message if there are no todos */}
                {todos.length === 0 && "No Todos"}

                {/* Map through the todos array and render TodoItem components */}
                {todos.map(todo => {
                    return <TodoItem {...todo} key={todo.id} setTodos={setTodos} />;
                })}
            </ul>
                {todos.length!==0 && <h4>Total Todos: {todos.length}</h4>}
        </>
    );
}
