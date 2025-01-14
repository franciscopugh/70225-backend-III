import express from 'express'
import compression from 'express-compression'
import errorMidd from './middlewares/error/errorMidd.js'
import userRouter from './routes/user.routes.js'


const app = express()
const PORT = 8080

app.use(express.json())
app.use(compression({
    brotli: {enabled: true, zlig: {}}
}))
app.use(errorMidd) //En todas las rutas de mi app se aplique el manejo de errores

//app.use(compression()) Utilizando GZIP

app.use('/api/users', userRouter)

app.get('/string', (req,res) => {
    let string = ""

    for(let i = 0; i< 10e4; i++) {
        string += "Esto es una cadena larga /n"
    }

    res.status(200).send(string)
})

app.listen(PORT, () => {
    console.log("Server on port:", PORT);
    
})