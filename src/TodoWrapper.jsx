import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo.trim() === '') {
      alert('Please enter a task.');
      return;
    }
    const newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTodos(updatedTodos);
  };

  // Filtered lists based on status
  const todosTodos = todos.filter(todo => !todo.completed && !todo.isEditing);
  const todosInProgress = todos.filter(todo => !todo.completed && todo.isEditing);
  const todosCompleted = todos.filter(todo => todo.completed);

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      
      {/* Render Todos */}
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
        <div>
          <h2>Todos</h2>
          {todosTodos.map((todo, index) => (
            <Todo
              key={todo.id}
              task={todo}
              toggleComplete={() => toggleComplete(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
              editTodo={() => editTodo(todo.id)}
            />
          ))}
        </div>
        <div>
          <h2>In Progress</h2>
          {todosInProgress.map((todo, index) => (
            <EditTodoForm
              key={todo.id}
              editTodo={editTodo}
              task={todo}
            />
          ))}
        </div>
        <div>
          <h2>Completed</h2>
          {todosCompleted.map((todo, index) => (
            <Todo
              key={todo.id}
              task={todo}
              toggleComplete={() => toggleComplete(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
              editTodo={() => editTodo(todo.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
