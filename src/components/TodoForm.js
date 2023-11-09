import { useState, useRef } from 'react'
import TodoList from './TodoList'
import {v4 as uuidv4 } from "uuid"


export const TodoForm = () => {
    const [todos, setTodos] = useState([
        { id: 1, name: "todo1", completed:false },
        { id: 2, name: "todo2", completed:false }
    ]);

    const todoNameRef = useRef();

    const handleAddTodo = () => {
        //タスクを追加
        const name = todoNameRef.current.value;
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

    return (
        <>
            <input type="text" ref={todoNameRef} />
            <button onClick={handleAddTodo}>Add</button>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </>
  )
}

export default TodoForm