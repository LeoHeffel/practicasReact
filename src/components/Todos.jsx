import PropTypes from 'prop-types'
import Todo from './Todo'
const Todos = ({todos})=>{
    return (
        <div className='mt-5'>
            <h2 className='text-center'> Todos</h2>
            <ul className='list-group'>
                {todos.map((todo,i)=>{
                    return <Todo key={i} todo={todo}/>
                })}
            </ul> 
        </div>
       
    )
}
 Todos.propTypes = {
    todos: PropTypes.array
}  
export default Todos
