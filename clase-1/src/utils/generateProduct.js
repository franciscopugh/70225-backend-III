import { fakerDE } from "@faker-js/faker";

const generateProduct = () => {
    //id, nombre, precio, stock, img, code, categoria
    return {
        _id: fakerDE.database.mongodbObjectId(),
        title: fakerDE.commerce.productName(),
        description: fakerDE.commerce.productDescription(),
        price: fakerDE.commerce.price(),
        stock: fakerDE.number.int({min: 0, max: 40}),
        img: fakerDE.image.url(),
        category: fakerDE.commerce.department()
    }
}

export default generateProduct