import { sequelize } from '../database.js'

const userController = {
  getUsers: async (req, res) => {
    const users = await sequelize.models.user.findAll()
    res.json(users)
  },
}

export default userController