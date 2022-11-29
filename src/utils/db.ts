import { MongoClient, Db } from 'mongodb'
import url from 'url'

type ConnectProps = {
  db: Db
  client: MongoClient
}

const client = new MongoClient(process.env.MONGODB_URI!)
let cache: Db | null = null

export const connectDb = async (): Promise<ConnectProps> => {
  if (cache) {
    cache
  }

  const nameDb = url.parse(process.env.MONGODB_URI!).pathname?.substring(1)
  const connected = await client.connect()
  const db = connected.db(nameDb)

  cache = db

  return {
    db,
    client
  }
}
