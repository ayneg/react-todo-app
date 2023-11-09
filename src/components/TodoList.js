import React from "react";
import TodoItem from "./TodoItem";

export const TodoList = ({ todos }) => {
  return todos.map((todo) => <TodoItem todo={todo} key={todo.name} />);
};

export default TodoList 