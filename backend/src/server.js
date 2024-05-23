import express from 'express'
import { getEnv } from './config/index.js'
import { conn } from './config/db.connection.js'
import projectRouter from './routes/project.router.js'
import userRouter from './routes/users.router.js'
import cors from 'cors'
const PORT = getEnv("PORT")
const app = express()

// middlewares
app.use(express.json())
app.use(cors())
app.use("/api/users", userRouter)
app.use("/api/projects", projectRouter)


app.get('/', (req, res) => res.json({ success: true }))


app.listen(PORT, () => {
    try {
        conn().then((data) => data && console.log(`Server Started at http://localhost:${PORT}`))
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
})



