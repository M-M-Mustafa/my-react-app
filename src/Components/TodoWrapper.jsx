// import React, { useState } from 'react';
// import { TodoForm } from './TodoForm';
// import { v4 as uuidv4 } from 'uuid';
// import { Todo } from './Todo';
// import { EditTodoForm } from './EditTodoForm';

// uuidv4();

// export const TodoWrapper = () => {
  
//   const [todos, setTodos] = useState([]);


//   const addTodo = (todo) => {
//     if (todo.trim() === '') {
//       alert('Please enter a task.');
//       return;
//     }
//     setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
//   };

//   const toggleComplete = (id) => {
//     setTodos(
//       todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
//     );
//   };

//   const deletTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const editTodo = (id) => {
//     setTodos(
//       todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
//     );
//   };

//   const editTask = (id, task) => {
//     setTodos(
//       todos.map((todo) => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
//     );
//   };

//   return (
//     <div className="TodoWrapper">
//       <h1>Get Things Done!</h1>
//       <TodoForm addTodo={addTodo} />
//       {todos.map((todo, index) =>
//         todo.isEditing ? (
//           <EditTodoForm editTodo={editTask} task={todo} key={index} />
//         ) : (
//           <Todo
//             task={todo}
//             key={index}
//             toggleComplete={toggleComplete}
//             deletTodo={deletTodo}
//             editTodo={editTodo}
//           />
//         )
//       )}
//     </div>
//   );
// };

// src/components/TodoWrapper.jsx
// src/components/TodoWrapper.jsx
import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import Todo from './Todo'; // Import using default export
import { EditTodoForm } from './EditTodoForm';
import { v4 as uuidv4 } from 'uuid';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo.trim() === '') {
      alert('Please enter a task.');
      return;
    }
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    );
  };

  const editTask = (id, task) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
        ) : (
          <Todo
            task={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
