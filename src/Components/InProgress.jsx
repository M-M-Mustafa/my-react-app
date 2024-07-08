// src/components/InProgress.jsx
// src/components/InProgress.jsx
import React from 'react';
import Todo from './Todo'; // Import using default export

const InProgress = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div  className="TodoWrapper">
      <h1>In Progress</h1>
      {/* Render in-progress todos here */}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          task={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default InProgress;

