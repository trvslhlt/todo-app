import TodoEntry from "../components/elements/TodoEntry/TodoEntry"
import TodoList from "../components/elements/TodoList/TodoList"

const Todos = props => {
    return (
        <div>
            <h1>TODOs</h1>
            <TodoEntry></TodoEntry>
            <TodoList></TodoList>
        </div>
    )
}

export default Todos