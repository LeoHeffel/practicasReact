import { useState } from "react"
import { useRef } from "react"

const NoControlado = ()=>{
    const form = useRef(null)

    const [error, setError] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()

        setError("")
        
        const data =new FormData(form.current)
        const {title, description, status} = Object.fromEntries(data.entries())
        
        if(!title.trim() || !description.trim() || !status.trim()){
            
            setError("Todos los campos son obligatorios")
            return
        }

    }

    return <form onSubmit={handleSubmit} ref={form} >
        <input type="text" placeholder="Ingrese Todo" className="form-control mb-2" name="title"/>
        <textarea className="form-control mb-2" placeholder="Ingrese descripcion" name="description"/>
        <select className="form-select mb-2" name="status" defaultValue={"pendiente"}>
            <option value="pendiente">Pendiente</option>
            <option value="completado">Completado</option>
        </select>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary">Procesar</button>
    </form>
}
export default NoControlado