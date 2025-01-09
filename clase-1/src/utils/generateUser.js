import { fakerDE } from "@faker-js/faker";
import generateProduct from "./generateProduct.js";

const generateUser = () => {
    //Id - nombre - apellido - sexo - fechaNac - email - contraseña - celular - img - productos
    let cart = []
    let numProds = fakerDE.number.int({min: 1, max: 8}) //Genero un numero aleatorio entre 1 y 8

    for(let i = 0; i < numProds; i++) {
        cart.push(generateProduct())
    }

    return {
        _id: fakerDE.database.mongodbObjectId(),
        name: fakerDE.person.firstName(),
        last_name: fakerDE.person.lastName(),
        sex: fakerDE.person.sex(),
        gender: fakerDE.person.gender(),
        birthDate: fakerDE.date.birthdate(),
        phone: fakerDE.phone.number(),
        img: fakerDE.image.avatar(),
        email: fakerDE.internet.email(),
        password: fakerDE.internet.password(),
        cart
    }
}

export default generateUser