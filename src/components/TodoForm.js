import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) 
{
    const[input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus() //focuses on just what is being referenced by mouse pointer
    })

    const handleChange = c =>{
        setInput(c.target.value);
    }

    const handleSubmit = s => {
        s.preventDefault(); //stops page from refreshing which would delete todolist

        props.onSubmit({
            id: Math.floor(Math.random() * 10000), //key pair relationship, random id *100000 to reduce chance of identical id. can codify this later
            text: input
        });

        setInput('');
    }

return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {
      props.edit ? 
      (
        <>
          <input
            placeholder='Edit item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Change
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add item'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add item
          </button>
        </>
      )
      }
    </form>
  )
}

export default TodoForm