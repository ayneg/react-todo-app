import { useState, useRef } from 'react'
import TodoList from './TodoList'
import {v4 as uuidv4 } from "uuid"


export const TodoForm = () => {
    const [todos, setTodos] = useState([]);

    const todoNameRef = useRef();

    const handleAddTodo = () => {
        //タスクを追加
        const name = todoNameRef.current.value;
        if (name === '') return;
        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), name: name, completed: false }];
        });
        todoNameRef.current.value = null;
    };

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id ===id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }

    const handleClear = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    }

    return (
        <>
            <div>Remaining tasks: {todos.filter((todo) => !todo.completed).length}</div>
            <input type="text" ref={todoNameRef} />
            <button onClick={handleAddTodo}>Add</button>
            <button onClick={handleClear}>Delete</button>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </>
  )
}

export default TodoForm