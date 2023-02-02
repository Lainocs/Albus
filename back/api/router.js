import express from 'express'
import UserController from './Controllers/UserController.js'
import UserRoutes from './Routes/UserRoutes.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.use('/users', UserRoutes)

export default router
