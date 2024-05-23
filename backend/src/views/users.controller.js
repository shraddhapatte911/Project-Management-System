import { UserModel } from "../models/users.model.js"

export class UserService {
    constructor() { }

    getUsers = async (req, res) => {
        try {
            const response = await UserModel.find({})
            return res.json(response)
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    createUsers = async (req, res) => {
        try {
            const response = await UserModel.create(req.body)
            return res.send(response)
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }
}