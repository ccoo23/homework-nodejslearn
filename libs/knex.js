import KNEX from 'knex'

const connections = {}

const knex = KNEX({
  client: 'mysql',
  connection: {
    host: config.get('127.0.0.1'),
    port: config.get('3306'),
    user: config.get('root'),
    password: config.get('zyf527GENIUS'),
    database: config.get('homework'),
    ssl: {
      cert: config.get('db.sslCert')
    }
  }
})

export default knex

export function getDbConnection (key = 'db') {
  if (connections[key] === undefined) {
    connections[key] = KNEX({
      client: 'mysql',
      connection: {
        host: config.get('127.0.0.1'),
        port: config.get('3306'),
        user: config.get('root'),
        password: config.get('zyf527GENIUS'),
        database: config.get('homework'),
        ssl: {
          cert: config.get('db.sslCert')
        }
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
