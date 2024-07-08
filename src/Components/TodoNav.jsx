const TodoNav = ({ todos, completeTodo }) => {
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => completeTodo(todo.id)}>
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default TodoNav;