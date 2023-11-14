import { useState, useRef } from 'react'
import TodoList from './TodoList'
import {v4 as uuidv4 } from "uuid"

export const TodoForm = () => {
    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef();

    const handleAddTodo = (e) => {
        //タスクを追加
        e.preventDefault(); //フォームの送信によるページのリロードを防ぐ
        const name = todoNameRef.current.value.trim();
        if (name === '') return;
        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), name: name, completed: false }];
        });
        todoNameRef.current.value = '';
    };

    const toggleTodo = (id) => {
        setTodos(todos.map( todo =>{
            if(todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        }));
    }

    const handleClear = (id) => {
        setTodos(todos.filter (todo => todo.id !== id));
    }

    return (
        <>
            <div>Remaining tasks: {todos.filter((todo) => !todo.completed).length}</div>

            <form onSubmit={handleAddTodo}>
                <input type="text" ref={todoNameRef} />
                <button type="submit">Add</button>
            </form>

            <h2>Uncompleted ({todos.filter((todo) => !todo.completed).length})</h2>
            <TodoList todos={todos.filter((todo => !todo.completed))} toggleTodo={toggleTodo} handleClear={handleClear} />
            <h2>Completed ({todos.filter((todo) => todo.completed).length})</h2>
            <TodoList todos={todos.filter((todo => todo.completed))} toggleTodo={toggleTodo} handleClear={handleClear}/>
        </>
  )
}

export default TodoForm