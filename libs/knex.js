import KNEX from 'knex'

const connections = {}

const knex = KNEX({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'zyf527GENIUS',
    database: 'homework'
  }
})

export default knex

export function getDbConnection (key = 'db') {
  if (connections[key] === undefined) {
    connections[key] = KNEX({
      client: 'mysql',
      connection: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'zyf527GENIUS',
        database: 'homework'
      },
      log: {
        debug (rs) {
            console.log('db rs', rs)
        }
      },
      debug: true,
      pool: {
        min: 0,
        max: 50,
        acquireTimeoutMillis: 10000
      }
    })
  }

  return connections[key]
}
