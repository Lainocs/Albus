import express from 'express'
import UserController from './Controllers/UserController.js'

const router = express.Router()

router.get('/', UserController.getUsers)

export default router
