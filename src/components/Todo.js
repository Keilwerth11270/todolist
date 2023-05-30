import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {SlClose} from 'react-icons/sl'
import {FiEdit3} from 'react-icons/fi'
import {MdArrowUpward, MdArrowDownward} from 'react-icons/md'

function Todo({todos, completeTodo, removeTodo, updateTodo, todoUp, todoDown}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value =>
    {
        updateTodo(edit.id, value)
        setEdit({id: null, value: ''})
    }

    if(edit.id)
    {
        return <TodoForm edit = {edit} onSubmit = {submitUpdate} />
    }



  return todos.map((todo, index) => (
    <div className = {todo.isComplete ? 'todo-row complete' : 'todo-row'} key = {index}>

        <div key = {todo.id} onClick={() => completeTodo(todo.id)}> {/*this calls the completeTodo function and passes todo id when item clicked*/}
            {todo.text}
        </div>
        <div className='icons'>
            <SlClose onClick={() => removeTodo(todo.id)} className='delete-icon'/>
            <FiEdit3 color='white' onClick={() => setEdit({id: todo.id, value: todo.text})} className='edit-icon'/>
            <MdArrowUpward onClick={() => todoUp({id: todo.id, text: todo.text})} className = 'up-icon'/>
            <MdArrowDownward onClick={() => todoDown({id: todo.id, text: todo.text})} className = 'down-icon'/>
        </div>
    </div>
  ));
}

export default Todo