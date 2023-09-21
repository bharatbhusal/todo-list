import TodoItem from "./TodoItem"

export default function TodoList({ todos, setTodos }) {

    return (
        <>
            <h1 className="header">Todo List</h1>
            <ul className="list">
                {todos.length === 0 && "No Todos"}
                {todos.map(todo => {
                    return <TodoItem {...todo} key={todo.id} setTodos={setTodos} />
                })}
            </ul>
        </>
    )
}