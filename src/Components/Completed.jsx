// src/components/Completed.jsx
import React from 'react';
import Todo from './Todo'; // Import using default export

const Completed = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div  className="TodoWrapper">
      <h1>Completed</h1>
      {/* Render completed todos here */}
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

export default Completed;

