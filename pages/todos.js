import TodoEntry from "../components/elements/TodoEntry/TodoEntry"
import TodoList from "../components/elements/TodoList/TodoList"
import styles from '../styles/Todos.module.css'

const Todos = props => {
    return (
        <div className={styles.todos}>
            <h1>TODOs</h1>
            <TodoEntry></TodoEntry>
            <TodoList></TodoList>
        </div>
    )
}

export default Todos