import React from "react";
import TodoItem from "./TodoItem";

export const TodoList = ({ todos, toggleTodo }) => {
  return todos.map((todo) => <TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} />);
};

export default TodoList 