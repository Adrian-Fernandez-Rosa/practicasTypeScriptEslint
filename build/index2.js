"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cursos_mock_1 = require("./mock/cursos.mock");
const curso_1 = require("./models/curso");
const Estudiante_1 = require("./models/Estudiante");
const ITarea_1 = require("./models/interfaces/ITarea");
const Persona_1 = require("./models/Persona");
const Programar_1 = require("./models/Programar");
// import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils';
console.log("Hola TypeScript2");
/*
type Empleado = {
    nombre: string
    apellido: string
    edad: number
}

const obtenerSalario= (empleado: Empleado, cobrar: () => string) => {
    if(empleado.edad > 70){
        return
    } else {
        cobrar(); //callback a ejecutar
    }
}


let EmpleadoAdri = {
    nombre: "Adrián",
    apellido: "Fernández Rosa",
    edad: 31
}

const obtenerSalario2 = () => {
    return "2";
}

obtenerSalario(EmpleadoAdri, () => "hola");
console.log("asd");
*/
// funciones Async 
console.log("Funciones Async");
function ejemploAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        // Await
        yield console.log("Tarea a completar con la secuencia");
        console.log("Tarea completada");
        return "completado";
    });
}
// accediendo 
ejemploAsync().then((respuesta) => {
    console.log("respuesta", respuesta);
}).catch((error) => {
    console.log("Ha habido un error", error);
}).finally(() => "Todo ha terminado");
// Generators
function* ejemplo() {
    //yield (sirve para emitir un nuevo valor)	emitir valores
    //La palabra clave yield se usa para pausar y reanudar una función generadora
    // (function* o función generadora heredada)
    let index = 0;
    while (index < 5) {
        // Emitimos un valor incrementado
        yield index++;
    }
}
let generadora = ejemplo();
console.log(generadora.next().value); // 0
console.log(generadora.next().value); // 1
console.log(generadora.next().value); // 2
console.log(generadora.next().value); // 3
// Worker
function* watcher(valor) {
    yield valor; // Emitimos el valor inicial
    yield* worker(valor); // Llamamos a las emisiones del worker para que emita otros valores
    yield valor + 10; // emitimos valor final mas 10
}
function* worker(valor) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}
let generatorSaga = watcher(0);
console.log("************");
console.log(generatorSaga.next().value); // 0 (lo ha hecho watcher)
console.log(generatorSaga.next().value); // 1 /lo ha hecho worker
console.log(generatorSaga.next().value); // 2  /lo ha hecho worker
console.log(generatorSaga.next().value); // 3  /lo ha hecho worker
console.log(generatorSaga.next().value); // 10  /lo ha hecho watcher
console.log(generatorSaga.next().value); // ya aqui no genera valor
// Sobrecarga de funciones
console.log("*********");
function mostrarError(error) {
    console.log("Ha habido un error:", error);
}
/*
function mostrarError2(errorNumber: number): void{
    console.log("Ha habido un error:", errorNumber);
}
*/
// Persistencia de datos 
//  1. LocalStorage // Almacena datos en el navegador
// 2. SessionStorage   // La diferencia radica en la sesión del navegador
// Es decir, los datos se persisten en la sesion del navegador
// 3. Cookies --> Tienen una fecha de caducidad y también tienen un ámbito de URL
// LocalStorage 
/*
function guardarEnLocalStorage(): void{

    localStorage.set("Nombre", "Adrian");
}

function leer(): void {
    let nombre= localStorage.get("nombre");
}
*/
// cookies 
const cookieOptions = {
    name: "usuario",
    value: "Martin",
    maxAge: 10 * 60,
    expires: new Date(2099, 10, 1),
    path: "/", // optional string,
};
// Seteamos la cookie
// setCookie(cookieOptions)
// Leer Cookie
// Eliminar cookie
// deleteCookie("usuario");
// Eliminar todas las cookies
// deleteAllCookies();
class Temporizador {
    empezar() {
        setTimeout(() => {
            // Comprobamos que exista la función terminar
            if (!this.terminar)
                return; //si no tenemos la función terminar retornamos
            // Cuando haya pasado el tiempo se ejecutara la función terminar
            this.terminar(new Date().getSeconds());
        }, 10000);
    }
}
const miTemporizador = new Temporizador();
// Definimos la función del callback a ejecturar cuando termine el tiempo 
miTemporizador.terminar = (tiempo) => {
    console.log("Evento terminados: ", tiempo);
};
// Lanzamos el temporizador
miTemporizador.empezar();
setInterval(() => console.log("Tic"), 1000);
// delete miTemporizador.terminar; //elimina evento
/*
class Curso {
    nombre: string;
    horas: number;

    constructor(nombre: string, horas: number){
        this.nombre = nombre;
        this.horas = horas;
    }
    
}

*/
/*
class Estudiante {

    // Propiedades de clase
    nombre: string;
    apellidos?:string;
    cursos: Curso[];
    
    constructor(nombre: string,cursos: Curso[] ,apellidos?:string){

        this.nombre = nombre;
        this.apellidos= apellidos? apellidos: undefined;
        this.cursos = cursos;
    }

}
*/
// instanciando curso
// const cursoTS = new Curso("TypeScript", 15);
// const cursoJS = new Curso("JavaScript", 20);
const listaCursos = cursos_mock_1.LISTA_CURSOS;
// Creamos estudiante
const martin = new Estudiante_1.Estudiante("Martin", listaCursos, "San José");
console.log(`${martin.nombre} estudia: `);
martin.cursos.forEach((curso) => {
    console.log(`- ${curso.nombre} (${curso.horas} horas)`); // TS 15 horas
});
// agregando otro curso 
const cursoAngular = new curso_1.Curso("Angular", 40);
martin.cursos.push(cursoAngular);
// Saber la instancia de objeto o variable 
//typeof //sirve para saber el tipo
// InstanceOf
martin.horasEstudiadas; // number
let fechaNacimiento = new Date(1991, 10, 10);
console.log(fechaNacimiento instanceof Date);
// ** Herencia y Polimorfismo 
let trabajador1 = new Persona_1.Trabajador("Adrían", "Rosa", 31, 2000);
let trabajador2 = new Persona_1.Trabajador("Pepe", "Pacho", 34, 4000);
let trabajador3 = new Persona_1.Trabajador("Juan", "Gonzales", 19, 1000);
trabajador1.saludar(); // herencia de Persona
let jefe = new Persona_1.Jefe("Pablo", "Garcia", 40);
jefe.emplados.push(trabajador1, trabajador2, trabajador3);
jefe.emplados.forEach((empleado) => empleado.saludar());
jefe.saludar();
// * Uso de Interfaces
let programar2 = {
    titulo: 'Programar en TypeScript',
    descripcion: 'Practicar con Katas para aprender a desarrollar con TS',
    completada: false,
    urgencia: ITarea_1.Nivel.Urgente,
    resumen: function () {
        return `${this.titulo} - ${this.completada}`;
    }
};
console.log(programar2.resumen());
// Tarea de programacion usando clase programar
let programarTS = new Programar_1.Programar("TypeScript", "Tarea de programacion", false, ITarea_1.Nivel.Bloqueante);
console.log(programarTS.resumen());
// Decoradores experimentales -> @ 
// -Clases
// - Parámetros
// - Métodos
// - Propiedades
/*
function Override(label: string) {
    return function (target: any, key:string){
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        })
    }
}

class PruebaDecorador {
    @Override('prueba') // Llamar a la función Override
    nombre: string = "Adrian";

   

}


let prueba = new PruebaDecorador();

console.log(prueba.nombre); // prueba, siempre devolvera prueva a través del get ()

*/
// Otra función para usarla como decorador
/*
function SoloLectura(target: any, key: string){
    Object.defineProperty(target, key, {
        writable: false
    })
}

class PruebaSoloLectura{

    @SoloLectura
    nombre: string = 's';

}

let pruebaLectura = new PruebaSoloLectura();
pruebaLectura.nombre = "Adrian2"

console.log(pruebaLectura.nombre+ "**");
*/
// Decorador para  parametros de un metodo 
function mostrarPosicion(target, key, parameterIndex) {
    console.log("Posición", parameterIndex);
}
class PruebaMetodoDecorador {
    prueba(a, b) {
        console.log(b);
    }
}
__decorate([
    __param(1, mostrarPosicion),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], PruebaMetodoDecorador.prototype, "prueba", null);
// usamos el método con el parametro y su decorador
new PruebaMetodoDecorador().prueba('hola**', false);
//# sourceMappingURL=index2.js.map