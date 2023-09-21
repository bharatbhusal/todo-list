

import { useEffect, useState } from 'react';
import './App.css';
import { NewTodoForm } from './components/NewTodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) return []
    return JSON.parse(localValue)

  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
    console.log("stored")
  }, [todos])

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos, { id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App;
