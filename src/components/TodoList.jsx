import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import DeleteCategoryItem from "./DeleteCategoryItem";

// Functional component for rendering a list of todo items
export default function TodoList({ todos, setTodos, categories, setCategories }) {
    const [toList, setToList] = useState('')
    const [count, setCount] = useState(0)
    // Function to delete a todo
    function deleteCategory(id) {
        console.log("delete called");
        setCategories(currentCategory => {
            return currentCategory.filter(category => category.id !== id);
        });
    }
    const Category = ({ each }) => {
        return (
            <div className="btn-category-box ">
                {each !== "All" && <button className="btn-delete-category-mini" onClick={() => deleteCategory(each.id)}>X</button>}

                <button className={`btn btn-category ${toList.category === each.category ? "active" : "btn-category"}`} onClick={() => setToList(each)}>{each !== "All" ? each.category : "All"}
                </button>

            </div>
        )
    }

    useEffect(() => {
        const countTodos = (category) => {
            setCount(0)
            if (category === "All") setCount(todos.length)
            else
                todos.map((todo) => {
                    if (todo.category === category.category)
                        setCount((prev) => prev + 1)
                })
        }
        countTodos(toList)
    }, [toList, todos])


    return (
        <div className="todo-list">
            {/* Header for the todo list */}
            <h1 className="header">Todo List</h1>
            <div className="category-selector">
                <Category each={"All"} />
                {categories.map(each => (
                    <Category key={each.id} each={each} />
                ))}
            </div>

            {/* List of todo items */}
            <ul className="list">
                {/* Display a message if there are no todos */}
                {todos.length === 0 && <p>No Todos</p>}

                {/* Map through the todos array and render TodoItem components */}
                {toList && todos.map(todo => {
                    if (toList === "All") return <TodoItem {...todo} key={todo.id} setTodos={setTodos} />;
                    else if (todo.category === toList.category)
                        return <TodoItem {...todo} key={todo.id} setTodos={setTodos} />;
                })}
            </ul>
            {/* Display the total number of todos if there are todos */}
            {<h4>{toList.category} Todos: {!toList.category ? todos.length : count}</h4>}

            {categories.length !== 0 && toList.category && <DeleteCategoryItem  {...toList} key={toList.id} setCategories={setCategories} />}

        </div >
    );
}
