
//causa - mensaje - codigo (0, 1)
class CustomError {
    static createError({name= "Error", cause, message, code = 1}) {
        const error = new Error(message, {cause})
        error.name = name //Todo error debe tener un nombre
        error.code = code //Opcional
        throw error //Genero una excepcion del error
    }
}

//metodo static hace referencia a un metodo propio de la CLASE

export default CustomError