import express from "express"
import { createUser, getAllusers, getMe, getUser, login, logout } from "../controllers/user.js"
import { isAuthenticated } from "../middlewares/auth.js"

const router = express.Router()

router.get('/users/all',getAllusers)

router.get('/user/:id',getUser)

router.post('/user/logout',logout)

router.post('/user/add',createUser)

router.post('/user/login',login)

router.post('/user/verify',isAuthenticated,getMe)


export default router