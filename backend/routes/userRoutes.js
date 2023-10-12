import express from 'express'
const router = express.Router()
import { getUserById, getUsers, test } from '../controllers/userController.js'

router.get('/', test)

router.get('/users', getUsers)

router.get('/user/:userId', getUserById)

export default router
