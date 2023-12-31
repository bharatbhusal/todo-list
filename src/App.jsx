// Importing necessary dependencies from React
import { useEffect, useState } from 'react';
import './App.css';

// Importing components
import { NewTodoForm } from './components/NewTodoForm';
import TodoList from './components/TodoList';
import { NewCategoryForm } from './components/NewCategoryForm';


// Main App component
function App() {
  // State to manage the list of todos
  const [todos, setTodos] = useState(() => {
    // Retrieving todos from local storage, or defaulting to an empty array if not present
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) return []
    return JSON.parse(localValue)
  })

  // Effect to update local storage whenever todos change
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
    console.log("todo stored")
  }, [todos])

  // Function to add a new todo to the list
  function addTodo(title, category) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos, { id: crypto.randomUUID(), title, category, completed: false }
      ]
    })
  }

  // State to manage the list of categories
  const [categories, setCategories] = useState(() => {
    // Retrieving category from local storage, or defaulting to an empty array if not present
    const localValue = localStorage.getItem("CATEGORIES")
    if (localValue === null) return []
    return JSON.parse(localValue)
  })

  // Effect to update local storage whenever category change
  useEffect(() => {
    localStorage.setItem("CATEGORIES", JSON.stringify(categories))
    console.log("category stored")
  }, [categories])

  // Function to add a new todo to the list
  function addCategory(category) {
    setCategories((currentCategories) => {
      return [
        ...currentCategories, { id: crypto.randomUUID(), category }
      ]
    })
  }

  // Render the NewTodoForm and TodoList components
  return (
    <>
      {/* Component for adding new todos */}
      <NewTodoForm addTodo={addTodo} categories={categories} />

      {/* Component for displaying the list of todos */}
      <TodoList todos={todos} setTodos={setTodos} categories={categories} setCategories={setCategories} />
      <NewCategoryForm addCategory={addCategory} />
    </>
  )
}

// Exporting the App component as the default export
export default App;
