import React, { useState } from 'react';
import './App.css';
import TodoList from './todolist';

function App() {
  const [todos, setTodos] = useState([{ id: 1, name: "todo 1", complete: false}])
  return (
    <>
    <TodoList todos={todos} />
    <input  type="text" />
    <button>Add TODO</button>
    <button>Clear Completed</button>
    <div>0 left to do</div>
    </>
    )
}

export default App;


// TIMESTAMP 15:17