import express from 'express'
import userRouter from './routes/users.routes.js'

const app = express()
const PORT = 8080

app.use(express.json())

app.use('/api/users', userRouter)

app.listen(PORT, () => {
    console.log("Server on PORT:", PORT);
})