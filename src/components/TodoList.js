import React from "react";
import TodoItem from "./TodoItem";

export const TodoList = ({ todos, toggleTodo, handleClear }) => {
  return (
    <>
      {todos.map((todo) => <TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} handleClear={handleClear} />)}
    </>
  );
};

export default TodoList 