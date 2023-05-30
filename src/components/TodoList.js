import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() 
{
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) //string expression to get rid of exceedingly many white spaces
        {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        // console.log(newTodos)
    }

    const updateTodo= (todoId, newText) =>
    {
        if(!newText.text || /^\s*$/.test(newText.text)) //string expression to get rid of exceedingly many white spaces
        {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newText : item)))
    }
    
    const todoUp = (item) =>
    {
        if(todos[0].id === item.id)
        {
            // console.log("top item")
            return
        }

        let newTodos = [...todos]
        let currentTodoIndex = 0

        for(let i = todos.length - 1; i > 0; i--)
        {
            if(todos[i].id === item.id)
            {
                currentTodoIndex = i
                break
            }
        }

        let temp = todos[currentTodoIndex - 1]
        newTodos[currentTodoIndex - 1] = newTodos[currentTodoIndex]
        newTodos[currentTodoIndex] = temp

        setTodos(newTodos)
    }

    const todoDown = (item) =>
    {
        if(todos[todos.length - 1].id === item.id)
        {
            // console.log("bottom item")
            return
        }

        let newTodos = [...todos]
        let currentTodoIndex = 0

        for(let i = todos.length - 1; i > 0; i--)
        {
            if(todos[i].id === item.id)
            {
                currentTodoIndex = i
                break
            }
        }

        let temp = todos[currentTodoIndex + 1]
        newTodos[currentTodoIndex + 1] = newTodos[currentTodoIndex]
        newTodos[currentTodoIndex] = temp

        setTodos(newTodos)
    }

    const removeTodo = id =>
    {
        const removedArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removedArr)
    }

    const completeTodo = id =>
    {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete =! todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

  return (
    <>
        <h1>Today's Objectives</h1>
        <TodoForm onSubmit = {addTodo}/>
        <Todo todos = {todos} completeTodo = {completeTodo} removeTodo = {removeTodo} updateTodo = {updateTodo} todoUp = {todoUp} todoDown = {todoDown}/>
    </>
  )
}

export default TodoList