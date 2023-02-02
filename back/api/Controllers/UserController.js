import User from '../Models/User.js'
import database from '../../database.js'

export default class UserController {
  static getUsers(req, res) {
    database.query('SELECT * FROM users', (err, result) => {
			if (err) throw err
			res.send(result)
		})
  }
}