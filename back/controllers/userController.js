import User from '../models/user.js'

const userController = {
  getUsers: async (req, res) => {
    const users = await User.findAll()
    res.json(users)
  },
}

export default userController