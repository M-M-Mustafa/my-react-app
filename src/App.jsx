
// import React, { useState } from 'react';
// import { TodoWrapper } from './Components/TodoWrapper';
// import Navbar from './Components/Navbar';

// function App() {
//   const [count, setCount] = useState(0)


//   return (
//     <>
//       <Navbar/> 
//       <div className='App'>

//       {/* <div className='wrapper'> */}
//         <TodoWrapper />
        
//       </div>
//       {/* </div> */}
//     </>
//   );
// }
// export default App;



// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TodoWrapper from './Components/TodoWrapper';
import InProgress from './Components/InProgress';
import Completed from './Components/Completed';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Learn React', completed: false, isEditing: false },
    { id: 2, task: 'Learn Vite', completed: false, isEditing: false },
    { id: 3, task: 'Build a Todo App', completed: true, isEditing: false },
  ]);

  const addTodo = (task) => {
    setTodos([...todos, { id: uuidv4(), task, completed: false, isEditing: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
  };

  const editTask = (id, task) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task, isEditing: false } : todo)));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoWrapper todos={todos} addTodo={addTodo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} editTask={editTask} />} />
          <Route path="/todos" element={<TodoWrapper todos={todos} addTodo={addTodo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} editTask={editTask} />} />
          <Route path="/in-progress" element={<InProgress todos={todos.filter(todo => !todo.completed)} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />} />
          <Route path="/completed" element={<Completed todos={todos.filter(todo => todo.completed)} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

