import { Router } from "express";
import CustomError from "../services/errors/CustomError.js";
import enumErrors from "../services/errors/enum.js";
import { createUserTypeError, createUserUniqueEmailError } from "../services/errors/message.js";
import {randomUUID} from 'node:crypto'

const users = []

const userRouter = Router()

userRouter.get('/', (req,res) => {
    res.status(200).send(users)
})

userRouter.post('/', (req,res) => {
    const {username, email, password} = req.body
    console.log(typeof(username));
    
    if(typeof(username) != "string" || typeof(email) != "string" || !password) {
        CustomError.createError({
            name: "Error al crear usuario",
            cause: createUserTypeError({username, email}),
            message: "Error en los tipos de datos ingresados al crear usuario",
            code: enumErrors.TYPES_ERROR //Envio el error numero 2
        })
    }

    const user = {
        id: 1,
        username,
        email,
        password
    }
    users.push(user)
    res.status(200).send(users)
})

export default userRouter