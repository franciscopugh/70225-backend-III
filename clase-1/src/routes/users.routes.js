import { Router } from "express";
import generateUser from "../utils/generateUser.js";

const userRouter = Router()

userRouter.get('/generate', async (req,res) => {
    let users = []
    for(let i = 0; i<1000; i++) {
        users.push(generateUser())
    }
    res.status(200).send({status: "sucess", payload: users})
})

export default userRouter