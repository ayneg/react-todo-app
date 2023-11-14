import React from 'react'

const TodoItem = ({todo, toggleTodo, handleClear}) => {

  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  const handleDeleteClick = () => {
    handleClear(todo.id);
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClick} />
      </label>
      {todo.name}
      <button onClick={handleDeleteClick}>delete</button>
    </div>
  )
}

export default TodoItem