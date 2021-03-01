import TodosAccessor from '../../../util/todos-accessor'

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET': {
                const { id } = req.query
                const todo = await TodosAccessor.get(id)
                res.status(200).json(todo)
            }
            break
        case 'PUT': {
                const todo = JSON.parse(req.body)
                await TodosAccessor.update(todo)
                res.status(200).json(todo)
            }
            break
        case 'DELETE': {
                const { id } = req.query
                await TodosAccessor.delete(id)
                res.status(200).end()
            }
            break
    }
}