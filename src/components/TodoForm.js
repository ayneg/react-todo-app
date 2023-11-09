import { useState, useRef } from 'react'
import TodoList from './TodoList'

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
            return [...prevTodos, {id: "1", name: name, completed: false }];
        });
        todoNameRef.current.value = null;
    };

    return (
        <>
            <input type="text" ref={todoNameRef} />
            <button onClick={handleAddTodo}>Add</button>
            <TodoList todos={todos}/>
        </>
  )
}

export default TodoForm