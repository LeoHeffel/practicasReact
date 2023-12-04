import PropTypes from 'prop-types'
import Todo from './Todo'
const Todos = ({ todos, deleteTodo , updateTodo}) => {
    return (
        <div className='mt-5'>
            <h2 className='text-center mb-3'> Todos</h2>
            <ul className='list-group'>
                {todos.map((todo, i) => {
                    return <Todo key={i} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                })}
                {
                    todos.length===0 && <li className='list-group-item'>Sin tareas</li>
                }
            </ul>
        </div>

    )
}
Todos.propTypes = {
    todos: PropTypes.array,
    deleteTodo: PropTypes.func,
    updateTodo: PropTypes.func
}
export default Todos
