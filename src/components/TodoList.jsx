import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

// Functional component for rendering a list of todo items
export default function TodoList({ todos, setTodos }) {
    const [toList, setToList] = useState('')
    const [count, setCount] = useState(0)

    const Category = ({ name }) => {
        return (
            <button className={`btn btn-category ${toList === name ? "active" : "btn-category"}`} onClick={() => setToList(name)}>{name}</button>
        )
    }

    useEffect(() => {
        const countTodos = (category) => {
            setCount(0)
            if (category === "All") setCount(todos.length)
            else
                todos.map((todo) => {
                    if (todo.category === category)
                        setCount((prev) => prev + 1)
                })
        }
        countTodos(toList)
    }, [toList, todos])

    return (
        <>
            {/* Header for the todo list */}
            <h1 className="header">Todo List</h1>
            <div className="category-selector">
                <Category name="All" />
                <Category name="Personal" />
                <Category name="College" />
                <Category name="Secrect" />
            </div>

            {/* List of todo items */}
            <ul className="list">
                {/* Display a message if there are no todos */}
                {todos.length === 0 && <p>No Todos</p>}

                {/* Map through the todos array and render TodoItem components */}
                {toList && todos.map(todo => {
                    if (toList === "All") return <TodoItem {...todo} key={todo.id} setTodos={setTodos} />;
                    else if (todo.category === toList)
                        return <TodoItem {...todo} key={todo.id} setTodos={setTodos} />;
                })}
            </ul>
            {/* Display the total number of todos if there are todos */}
            {<h4>{toList} Todos: {toList !== "" ? count : todos.length}</h4>}
        </>
    );
}
