import { connectToDatabase, toObjectId } from '../util/mongodb'

const TODOS = 'todos'

function _mapFromDB(dbTodo) {
    const todo = { ...dbTodo, id: dbTodo._id }
    delete todo._id
    return todo
}

class TodosAccessor {

    static async getAll() {
        const { db } = await connectToDatabase()
        const todos = await db.collection(TODOS).find().toArray()
        const allTodos = todos.map(_mapFromDB)
        return allTodos
    }

    static async get(id) {
        const { db } = await connectToDatabase()
        const query = {"_id": toObjectId(id) }
        const todo = await db.collection(TODOS).findOne(query)
        return _mapFromDB(todo)
    }

    static async update(todo) {
        const { db } = await connectToDatabase()
        const query = { "_id": toObjectId(todo.id) }
        await db.collection(TODOS).replaceOne(query, todo)
        return todo
    }

    static async create(todoData) {
        const { db } = await connectToDatabase()
        const query = {
            text: todoData.text,
            dateCreated: todoData.dateCreated,
            dateCompleted: null
        }
        const result = await db.collection(TODOS).insertOne(query)
        const findQuery = { "_id": result.insertedId }
        const todo = await db.collection(TODOS).findOne(findQuery)
        return _mapFromDB(todo)
    }

    static async delete(id) {
        const { db } = await connectToDatabase()
        const query = { "_id": toObjectId(id) }
        await db.collection(TODOS).deleteOne(query)
    }
}

export default TodosAccessor