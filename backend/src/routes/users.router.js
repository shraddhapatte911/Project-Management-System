import { Router } from "express";
import { UserService } from "../views/users.controller.js";
const userRouter = Router()
const userService = new UserService()

userRouter.get('/', (req, res) => userService.getUsers(req, res))
userRouter.post('/create', (req, res) => userService.createUsers(req, res))

export default userRouter