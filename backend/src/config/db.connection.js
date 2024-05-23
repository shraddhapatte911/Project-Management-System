import mongoose from "mongoose"
import { getEnv } from "./index.js"
const MONGO_URL = getEnv("MONGO_URL")

export const conn = async () => {
    try {
        const connectionResponse = await mongoose.connect(MONGO_URL)
        return true
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}