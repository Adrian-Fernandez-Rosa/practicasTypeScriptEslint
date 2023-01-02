import { AsyncLocalStorage } from "async_hooks";
import { LISTA_CURSOS } from "./mock/cursos.mock";
import { Curso } from "./models/curso";
import { Estudiante } from "./models/Estudiante";
import { ITarea, Nivel } from "./models/interfaces/ITarea";
import { Trabajador, Jefe } from "./models/Persona";
import { Programar } from "./models/Programar";
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

async function ejemploAsync(): Promise<string>{
    // Await

    await console.log("Tarea a completar con la secuencia");
    console.log("Tarea completada")
    return "completado"
}

// accediendo 

ejemploAsync().then((respuesta) => {
    console.log("respuesta", respuesta)
}).catch((error) => {
    console.log("Ha habido un error", error)
}).finally(() => "Todo ha terminado")

// Generators

function* ejemplo(){ // notar el asterisco
    //yield (sirve para emitir un nuevo valor)	emitir valores
    //La palabra clave yield se usa para pausar y reanudar una función generadora
    // (function* o función generadora heredada)

    let index = 0;

    while(index < 5 ){
        // Emitimos un valor incrementado
        yield index++;
    }

}

let generadora = ejemplo();

console.log(generadora.next().value) // 0
console.log(generadora.next().value) // 1
console.log(generadora.next().value) // 2
console.log(generadora.next().value) // 3

// Worker

function* watcher(valor: number) {
   
    yield valor; // Emitimos el valor inicial

    yield* worker(valor); // Llamamos a las emisiones del worker para que emita otros valores
    yield valor + 10; // emitimos valor final mas 10
}

function* worker(valor: number) {

    yield valor + 1;
    yield valor + 2;
    yield valor + 3;

}

let generatorSaga = watcher(0);
console.log("************")
console.log(generatorSaga.next().value)// 0 (lo ha hecho watcher)
console.log(generatorSaga.next().value)// 1 /lo ha hecho worker
console.log(generatorSaga.next().value)// 2  /lo ha hecho worker
console.log(generatorSaga.next().value)// 3  /lo ha hecho worker
console.log(generatorSaga.next().value)// 10  /lo ha hecho watcher
console.log(generatorSaga.next().value)// ya aqui no genera valor



// Sobrecarga de funciones
console.log("*********")
function mostrarError(error: string | number): void{
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
    name: "usuario", // string,
    value: "Martin", // string,
    maxAge: 10 * 60, // optional number (value in seconds),
    expires: new Date(2099, 10, 1), // optional Date,
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

    public terminar?: (tiempo: number) => void;

    public empezar(): void {

            setTimeout(() => {

                // Comprobamos que exista la función terminar
                if(!this.terminar) return //si no tenemos la función terminar retornamos
                // Cuando haya pasado el tiempo se ejecutara la función terminar
                this.terminar(new Date().getSeconds());
            }, 10000)
    }
}

const miTemporizador: Temporizador = new Temporizador();

// Definimos la función del callback a ejecturar cuando termine el tiempo 

miTemporizador.terminar = (tiempo: number) => {
    console.log("Evento terminados: ", tiempo);
}

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

const listaCursos: Curso[] = LISTA_CURSOS;



// Creamos estudiante

const martin: Estudiante = new Estudiante("Martin", listaCursos, "San José");

console.log(`${martin.nombre} estudia: `);
martin.cursos.forEach((curso: Curso) => {
    console.log(`- ${curso.nombre} (${curso.horas} horas)`); // TS 15 horas
})


// agregando otro curso 

const cursoAngular: Curso = new Curso("Angular", 40);

martin.cursos.push(cursoAngular);

// Saber la instancia de objeto o variable 

//typeof //sirve para saber el tipo

// InstanceOf

martin.horasEstudiadas // number


let fechaNacimiento = new Date(1991, 10, 10);

console.log(fechaNacimiento instanceof Date)


// ** Herencia y Polimorfismo 

let trabajador1 = new Trabajador("Adrían", "Rosa", 31, 2000);
let trabajador2 = new Trabajador("Pepe", "Pacho", 34, 4000);
let trabajador3 = new Trabajador("Juan", "Gonzales", 19, 1000);


trabajador1.saludar(); // herencia de Persona

let jefe = new Jefe("Pablo", "Garcia", 40);

jefe.emplados.push(trabajador1, trabajador2, trabajador3);

jefe.emplados.forEach((empleado:Trabajador) => empleado.saludar());

jefe.saludar();


// * Uso de Interfaces

let programar2: ITarea = {
    titulo: 'Programar en TypeScript',
    descripcion: 'Practicar con Katas para aprender a desarrollar con TS',
    completada: false,
    urgencia: Nivel.Urgente,
    resumen: function (): string {
       return `${this.titulo} - ${this.completada}`;
    }
}

console.log(programar2.resumen());


// Tarea de programacion usando clase programar

let programarTS = new Programar("TypeScript", "Tarea de programacion", false, Nivel.Bloqueante);

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


function mostrarPosicion(target: any, key: string, parameterIndex: number){
        console.log("Posición", parameterIndex);
}

class PruebaMetodoDecorador {

    prueba(a: string,@mostrarPosicion b: boolean){
        console.log(b)
    }
}

// usamos el método con el parametro y su decorador
new PruebaMetodoDecorador().prueba('hola**', false);