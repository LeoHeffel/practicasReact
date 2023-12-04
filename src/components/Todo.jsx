import PropTypes from 'prop-types'
const Todo =({todo})=>{
    const {title,description, status, priority} = todo
    return (
        <li className="list-group-item ">
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className={`${status && "text-decoration-line-through"}`}>{title}</h5>
                    <p className={`${status && "text-decoration-line-through"}`}> {description}</p>
                    <div className="d-flex gap-2">
                        <button className='btn btn-sm btn-danger'>Eliminar</button>
                        <button className='btn btn-sm btn-warning'>Actualizar</button>
                    </div>
                </div>
                {priority&& <span className='badge text-bg-primary l'> Prioritario</span>}
            </div>
        </li>
    )
}
Todo.propTypes={
    todo: PropTypes.object
}
export default Todo
