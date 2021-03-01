import { connect } from 'react-redux'
import {
    updateTodo,
    deleteTodo,
 } from '../redux/actions/todos'
import styles from './todo-item.module.css'

const TodoItem = props => {
    const { todo } = props
    const done = todo.dateCompleted !== null

    const onClick = e => {
        const complete = e.target.checked
        const updatedTodo = {
            ...todo,
            dateCompleted: complete ? new Date() : null,
        }
        props.updateTodo(updatedTodo)
    }

    const onDelete = e => {
        props.deleteTodo(todo.id)
    }

    return (
        <div className={styles.todoitem}>
            <input type='button' id="delete" value='Delete' onClick={onDelete}></input>
            <input type='checkbox' id="done" name="done" defaultChecked={done} onChange={onClick}></input>
            <p>{todo.text}</p>
        </div>
    )
}

const mapDispatchToProps = {
    updateTodo,
    deleteTodo,
}

export default connect(null, mapDispatchToProps)(TodoItem)