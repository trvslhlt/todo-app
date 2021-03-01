import { MongoClient, ObjectID } from 'mongodb'

const uri = process.env.MONGO_URL
const dbName = 'mydata'
let cachedClient
let cachedDb

export async function connectToDatabase() {
    let client = cachedClient
    let db = cachedDb
    if (!cachedClient || !cachedDb) {
        client = await MongoClient.connect(uri, {
            useUnifiedTopology: true
        })
        db = await client.db(dbName)
    }
    return { client, db }
}

export function toObjectId(id) {
    return ObjectID(id)
}