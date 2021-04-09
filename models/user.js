// import KNEX from 'knex'
import KNEX from '../libs/knex.js'

class User {
  static getUserById(id) {
    return new Promise((resolve) => {
      const db = KNEX
      console.log('IDDDDDDDDD', id)
      db
        .raw(`select * from user where user_id=${id}`)
        .then((rs) => {
          resolve(rs)
        })
    })
  }

  static createUser(params) {
    return new Promise((resolve, reject) => {
      const db = KNEX
      console.log('params', params)
      db('user').insert({
        user_id: params.userid,
        user_name: params.name,
        password: params.password,
        age: params.age
      }).then((rs) => {
        resolve(rs)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  static updateUser(params) {
    return new Promise((resolve, reject) => {
      const db = KNEX
      console.log('params', params)
      db('user').update({
        user_name: params.name,
        password: params.password,
        age: params.age
      }).where({
        user_id: params.userid
      }).then((rs) => {
        resolve(rs)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  static deleteUser(userid) {
    return new Promise((resolve, reject) => {
      const db = KNEX
      db('user').where({
        user_id: userid
      }).del().then((rs) => {
        resolve(rs)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

export default User
