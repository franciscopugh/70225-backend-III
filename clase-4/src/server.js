import express from 'express'
import { addLogger } from './utils/logger.js'

const app = express()
const PORT = 8080

app.use(addLogger)

app.get('/', (req,res) => {
    res.send("Hola!")
})

app.post('/', (req,res) => {
    req.logger.warn("Warning!!!!")
    req.logger.error("ERORRRRR!")
    req.logger.info("ERORRRRR!")
    res.send("Hola2")
})

app.get('/operacionsimple', (req,res) => {
    let sum = 0
    for(let i = 0; i< 1e4; i++) {
        sum += i
    }
    res.status(200).send({sum})
})

app.get('/operacioncompleja', (req,res) => {
    let sum = 0
    for(let i= 0; 1e6; i++) {
        sum += i
    }
    res.status(200).send({sum})
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
    
})
