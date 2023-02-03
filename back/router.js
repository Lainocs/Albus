import express from 'express'
import userRoutes from './routes/userRoutes.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.use('/users', userRoutes)

export default router
