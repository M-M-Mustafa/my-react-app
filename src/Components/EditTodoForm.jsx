
import React , {useState}from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  const [value,setValue] = useState(task.task) 
  const handleSubmit = (e) => {

    e.preventDefault();

    editTodo(task.id ,value)

    setValue("")
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className="todo-input "  value={value} placeholder="Update the task"
        onChange={(e)=> setValue(e.target.value)} />
        <button type="submit" className='todo-btn'>Update Task</button>
    </form>
  )
}
