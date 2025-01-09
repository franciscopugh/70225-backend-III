import dotenv from 'dotenv'

const env = 'DEV'
dotenv.config({
    path: env == 'PROD' ? './.env.prod' : './.env.dev'
}) //Setear los valores del .env (consultando si es desarrollo o es produccion)

export default {
    PORT: process.env.PORT,
    URL_MONGO: process.env.URL_MONGO,
    PASS_MONGO: process.env.PASS_BDD
}