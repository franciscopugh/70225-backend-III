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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    console.log("Instancia creada: ".concat(target));
}
var Vehiculo = function () {
    var _classDecorators = [LogInstancia];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Vehiculo = _classThis = /** @class */ (function () {
        function Vehiculo_1(marca, modelo) {
            this.marca = marca;
            this.modelo = modelo;
        }
        Vehiculo_1.prototype.mostrarData = function () {
            console.log("Vehiculo: ".concat(this.marca, " - ").concat(this.modelo));
        };
        return Vehiculo_1;
    }());
    __setFunctionName(_classThis, "Vehiculo");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Vehiculo = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Vehiculo = _classThis;
}();
var Avion = function () {
    var _classDecorators = [LogInstancia];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = Vehiculo;
    var Avion = _classThis = /** @class */ (function (_super) {
        __extends(Avion_1, _super);
        function Avion_1(marca, modelo, alturaMaxima, velocidadMaxima) {
            var _this = _super.call(this, marca, modelo) || this;
            _this.alturaMaxima = alturaMaxima;
            _this.velocidadMaxima = velocidadMaxima;
            return _this;
        }
        Avion_1.prototype.volar = function () {
            console.log("Estoy volando");
        };
        Avion_1.prototype.acelerar = function () {
            console.log("Estoy acelerando");
        };
        return Avion_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Avion");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Avion = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Avion = _classThis;
}();
var avioncito1 = new Avion("Boeing", "737", 11000, 900);
avioncito1.acelerar();
avioncito1.volar();
