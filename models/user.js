// import KNEX from 'knex'
import KNEX from '../libs/knex.js'

class User {
  static getUserById() {
    return new Promise((resolve) => {
      const db = KNEX
      db
        .raw(`select userid as id from user`)
        .then((rs) => {
          resolve(rs)
        })
    })
  }
}

export default User
