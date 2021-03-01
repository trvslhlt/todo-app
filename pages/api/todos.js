import TodosAccessor from '../../util/todos-accessor'

async function getHandler(_req, res) {
    const todos = await TodosAccessor.getAll()
    res.status(200).json(todos)
}

async function postHandler(req, res) {
    const todoData = JSON.parse(req.body)
    const newTodo = await TodosAccessor.create(todoData)
    res.status(200).json(newTodo)
}

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            await getHandler(req, res)
            break
        case 'POST':
            await postHandler(req, res)
            break
        default:
            res.status(400).end()
    }
}