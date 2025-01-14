import enumErrors from "../../services/errors/enum.js";

export default (error, req, res, next)=> {
    console.log(error);
    switch(error.code) {
        case enumErrors.TYPES_ERROR:
            res.status(400).send(error.name)
            break
        default:
            res.status(500).send("Error desconocido")
    }
}