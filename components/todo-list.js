import TodoItem from './todo-item'
import styles from './todo-list.module.css'

const TodoList = props => {
    const { todos } = props
    return (
        <div className={styles.todolist}>
            <p>Todo list</p>
            {todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo}></TodoItem>
            })}
        </div>
    )
}

export default TodoList