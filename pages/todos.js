
import React from 'react'
import { connect } from 'react-redux'
import { getTodos } from '../redux/actions/todos'
import TodoEntry from '../components/todo-entry'
import TodoList from '../components/todo-list'

class TodosPage extends React.Component {

    static async getInitialProps(ctx) {
        const { store } = ctx;
        const todos = await store.dispatch(getTodos())
        return { todos }
    }

    constructor(props) {
        super(props)
    }

    render() {
        const { todos, addTodo } = this.props
        return(
            <div>
                <h1>Todos</h1>
                <TodoEntry></TodoEntry>
                <TodoList todos={todos}></TodoList>
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(TodosPage)