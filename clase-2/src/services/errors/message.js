
export const createUserTypeError = (user) => {
    return `
        Una o mas de los valores enviados no es valido. Se esperaban las siguientes
        condiciones:
        * username: Se esperaba un string, se recibio ${user.username}
        * email: Se esperaba un string, se recibio ${user.email}
    `
}

export const createUserUniqueEmailError = (user) => {
    return `
        El email ${user.email} ingresado ya se registrado.
    `
}