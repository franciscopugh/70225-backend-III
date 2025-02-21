/*let mensaje: string = "Hola"
let numero: number = 3

class Persona {
    nombre: string
    edad:number

    constructor(paramNombre: string, paramEdad: number) {
        this.nombre = paramNombre
        this.edad = paramEdad
    }

    saludar(): string {
        return `Hola, soy ${this.nombre}, tengo ${this.edad} años y te estoy saludando`
    }
}

interface Usuario {
    email: string
    password: string
    activo?: boolean
}

const user1: Usuario = {
    email: "f@f.com",
    password: "1234",
    activo: true
}*/

function LogInstancia(target: Function) {
    console.log(`Instancia creada: ${target}`)
}

@LogInstancia
class Vehiculo {
    marca: string
    modelo: string
    constructor(marca: string, modelo: string) {
        this.marca = marca
        this.modelo = modelo
    }

    mostrarData(): void {
        console.log(`Vehiculo: ${this.marca} - ${this.modelo}`);
    }
}

interface Conducible {
    velocidadMaxima: number
    acelerar(): void
}

interface Volable {
    alturaMaxima: number
    volar(): void
}

@LogInstancia //Aplicando esta funcion como decorador
class Avion extends Vehiculo implements Volable, Conducible {
    alturaMaxima: number
    velocidadMaxima: number;
    constructor(marca: string, modelo: string,  alturaMaxima: number, velocidadMaxima: number) {
        super(marca, modelo)
        this.alturaMaxima = alturaMaxima
        this.velocidadMaxima = velocidadMaxima
    }

    volar(): void {
        console.log("Estoy volando")
    }

    acelerar(): void {
        console.log("Estoy acelerando")
    }
}

const avioncito1 = new Avion("Boeing", "737", 11000, 900)

avioncito1.acelerar()
avioncito1.volar()