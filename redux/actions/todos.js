export const TODO_ADD = 'TODO_ADD'
export const TODO_ADDED = 'TODO_ADDED'
export const TODO_UPDATE = 'TODO_UPDATE'
export const TODO_UPDATED = 'TODO_UPDATED'
export const TODO_DELETE = 'TODO_DELETE'
export const TODO_DELETED = 'TODO_DELETED'
export const TODOS_GET = 'TODOS_GET'
export const TODOS_FETCHED = 'TODOS_FETCHED'

export const addTodo = todoData => {
    return dispatch => {
        return fetch('http://localhost:3000/api/todos', {
            method: 'POST',
            body: JSON.stringify(todoData)
        })
        .then(res =>  res.json())
        .then(todo => dispatch(addedTodo(todo)))
        .catch(err => {
            console.error('failed to post todo. err: ', err)
        })
    }
}

export const addedTodo = todo => ({
    type: TODO_ADDED,
    payload: todo,
})

export const getTodos = () => {
    return dispatch => {
        return fetch('http://localhost:3000/api/todos')
        .then(res =>  res.json())
        .then(todos => {
            dispatch(fetchedTodos(todos))
            return todos
        })
        .catch(e => console.error('failed to fetch todos: ', e))
    }
}

export const deletedTodo = id => ({
    type: TODO_DELETED,
    payload: id,
})

export const deleteTodo = id => {
    return dispatch => {
        return fetch(`http://localhost:3000/api/todos/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            dispatch(deletedTodo(id))
            return id
        })
        .catch(e => console.error('failed to delete todo: ', e))
    }
}

export const fetchedTodos = todos => ({
    type: TODOS_FETCHED,
    payload: todos,
})

export const updateTodo = todo => {
    return dispatch => {
        return fetch(`http://localhost:3000/api/todos/${todo.id}`, {
            method: 'PUT',
            body: JSON.stringify(todo)
        })
        .then(res => res.json())
        .then(todo => {
            const ut = updatedTodo(todo)
            dispatch(ut)
            return todo
        })
        .catch(e => console.error('failed to update todo'))
    }
}

export const updatedTodo = todo => ({
    type: TODO_UPDATED,
    payload: todo,
})