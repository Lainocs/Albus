import User from '../models/user.js'

const userController = {
  getUsers: async (req, res) => {
    const users = await User.findAll()
    res.json(users)
  },

  getUsersByRole: async (req, res) => {
    const usersRole = await User.findAll({
      where: {
        role: req.params.role
      }
    })
    if(usersRole.length) {
      res.json(usersRole)
    } else {
        res.status(404).json({ message: "No users found with this role" })
    }

  },
  getSingleUser: async (req, res) => {
    const user = await User.findByPk(req.params.id)
    if(user) {
      res.json(user)
    } else {
      res.status(404).json({ message: "No user found with this id" })
    }
  },
}

export default userController