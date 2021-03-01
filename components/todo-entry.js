import { connect } from 'react-redux'
import styles from './todo-entry.module.css'
import { addTodo } from '../redux/actions/todos'

const TodoEntry = props => {

    let text = null

    const onTextChange = e => {
        text = e.target.value
    }

    const onSubmit = () => {
        const todoData = { text }
        props.addTodo(todoData)
    }

    return (
        <div className={styles.todoentry}>
            <p>Todo Entry</p>
            <input type='text' placeholder='todo description' onChange={onTextChange}></input>
            <input type='button' value='Add Todo' onClick={onSubmit}></input>
        </div>
    )
}

const mapDispatchToProps = { addTodo }

export default connect(null, mapDispatchToProps)(TodoEntry)