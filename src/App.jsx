import { useState } from "react"
import Formulario from "./components/Formulario"
import Todos from "./components/Todos"
import { useEffect } from "react"

const initalStateTodos = localStorage.getItem("todos") ?
                           JSON.parse(localStorage.getItem("todos")) 
                          : []
                          
const App = ()=>{

  const [todos,setTodos]= useState(initalStateTodos)

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  const addTodo = (todo)=>{
    setTodos([...todos,todo])
  }

  const deleteTodo = (id)=>{
    setTodos(todos.filter((todo)=>todo.id !== id))
  }

  const updateTodo= (id)=>(
    setTodos(todos.map((todo)=>todo.id === id ? {...todo, status: !todo.status} : todo))
  )

  const orderTodos = (arrayTodos) =>{
    return arrayTodos.sort((a,b)=>{
      if(a.priority === b.priority)return 0
      if(a.priority)return -1
      if(!a.priority)return 1
    })
  }

  return <div className="container mb-2">
      <h1 className="text-center my-5 ">Formularios</h1>
    <Formulario addTodo={addTodo}/>
    <Todos todos={orderTodos(todos)} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
  </div>
}
export default App