"use strict";
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
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
function LogInstancia(target) {
    console.log(`Instancia creada: ${target}`);
}
let Vehiculo = (() => {
    let _classDecorators = [LogInstancia];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Vehiculo = _classThis = class {
        constructor(marca, modelo) {
            this.marca = marca;
            this.modelo = modelo;
        }
        mostrarData() {
            console.log(`Vehiculo: ${this.marca} - ${this.modelo}`);
        }
    };
    __setFunctionName(_classThis, "Vehiculo");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Vehiculo = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Vehiculo = _classThis;
})();
let Avion = (() => {
    let _classDecorators = [LogInstancia];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = Vehiculo;
    var Avion = _classThis = class extends _classSuper {
        constructor(marca, modelo, alturaMaxima, velocidadMaxima) {
            super(marca, modelo);
            this.alturaMaxima = alturaMaxima;
            this.velocidadMaxima = velocidadMaxima;
        }
        volar() {
            console.log("Estoy volando");
        }
        acelerar() {
            console.log("Estoy acelerando");
        }
    };
    __setFunctionName(_classThis, "Avion");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Avion = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Avion = _classThis;
})();
const avioncito1 = new Avion("Boeing", "737", 11000, 900);
avioncito1.acelerar();
avioncito1.volar();
