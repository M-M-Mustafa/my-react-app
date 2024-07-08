// import { faPenToSquare, faTrash , faCheck } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React from 'react'

// export const Todo = ({task,toggleComplete, deletTodo, editTodo}) => {
//   return (
//     <div className='Todo'>
//       <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? 'completed':""}`}>{task.task}</p>
//     <div className='icons'>
//       <FontAwesomeIcon className="check-icon" icon={faCheck} onClick={() => toggleComplete(task.id)} />
//       <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={()=>editTodo(task.id)} />
//       <FontAwesomeIcon  className="delete-icon" icon={faTrash} onClick={()=>deletTodo(task.id)} />
//     </div>
//     </div>
//   )
// }
// Todo.jsx
// Todo.jsx
/// src/components/Todo.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const handleDelete = () => {
    deleteTodo(task.id);
  };

  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
      <div className='icons'>
        <FontAwesomeIcon className="check-icon" icon={faCheck} onClick={() => toggleComplete(task.id)} />
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Todo; // Ensure Todo is exported as default





