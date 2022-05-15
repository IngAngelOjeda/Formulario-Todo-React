import React from 'react'
import { useState } from 'react'
import ToDo from './todo'
import "./todoApp.css"


export default function ToDoApp() {
  
  const [title, setTitle] = useState() 
  const [todos, setTodos] = useState([])

  function handleSutmit(e){
    e.preventDefault()
    
    const newTodo = {
      id: crypto.randomUUID(),
      title:title,
      complete:false
    }

    const temp = [...todos]
    temp.unshift(newTodo)

    setTodos(temp)

    setTitle("")

  }

  function handleChange(e) {
    const value = e.target.value;

    setTitle(value)
  }

  function handleUpdate(id, value) {
    const temp = [...todos]
    const item = temp.find(item => item.id === id)
    item.title = value
    setTodos(temp)
  }

  function handleDelete(id) {
    const temp = todos.filter(item => item.id !== id)
    
    setTodos(temp)
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSutmit}>
        <input onChange={handleChange} className="todoInput" value={title}/>
        <input 
          onClick={handleSutmit} 
          type="submit" 
          value="Create todo" 
          className="buttonCreate"
        />
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          <ToDo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>

  ))}
      </div>
    </div>
  )
}
