import { useState } from "react"
import Formulario from "./components/Formulario"
import Todos from "./components/Todos"
const initalStateTodos = [
  {
    id:1,
    title: "Primer Todo",
    description: "Primer Todo",
    status: true,
    priority: true
  },
  {
    id:2,
    title: "Segundo Todo",
    description: "Segundo Todo",
    status: false,
    priority: true
  },
  {
    id:3,
    title: "tercer Todo",
    description: "tercer Todo",
    status: false,
    priority: false
  },
]
const App = ()=>{

  const [todos,setTodos]= useState(initalStateTodos)
  const addTodo = (todo)=>{
    setTodos([...todos,todo])
  }

  return <div className="container mb-2">
      <h1 className="text-center my-5 ">Formularios</h1>
    <Formulario addTodo={addTodo}/>
    <Todos todos={todos}/>
  </div>
}
export default App