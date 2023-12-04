import { useState } from "react"
import  PropTypes from 'prop-types'
import Swal from 'sweetalert2'
const Formulario = ({addTodo})=>{

    const [todo, setTodo]= useState({
        title: "",
        description: "",
        status: "pendiente",
        priority: false
    })
    
    const {title, description, status, priority} = todo

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!title.trim() || !description.trim() ){
         return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Titulo y descripción son obligatorios!",
              });
        }

        addTodo({
            id: Date.now(),
            ...todo,
            status: status === "completado" ? true : false
        }
            
        )
        setTodo({
            title: "",
            description: "",
            status: "pendiente",
            priority: false
        })
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Todo agregado",
            showConfirmButton: false,
            timer: 1500
            
          });
          
    }

    const handleChange =(e)=>{
        const {name, value,checked,type} = e.target
        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value
        })
    }


    return <form onSubmit={handleSubmit}  >
        <input 
            type="text" placeholder="Ingrese Todo" 
            className="form-control mb-2" name="title"
            value={title} 
            onChange={handleChange}
        />
        <textarea 
            className="form-control mb-2"
            placeholder="Ingrese descripcion"
            name="description" 
            value={description}
            onChange={handleChange}
        />
        <div className="form-check">
            <input 
                type="checkbox"
                name="priority" 
                id="inputPriority" 
                className="form-check-input mb-2"
                checked={priority}
                onChange={handleChange}
            />
            <label htmlFor="inputPriority">Dar Prioridad</label>
        </div>
        <select 
            className="form-select mb-2" 
            name="status" 
            value={status} 
            onChange={handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
        </select>
 
        <button 
            type="submit" 
            className="btn btn-primary">
                Agregar Todo
        </button>
    </form>
}
Formulario.propTypes={
    addTodo: PropTypes.func.isRequired
}

export default Formulario