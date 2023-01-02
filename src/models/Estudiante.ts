import {Curso} from "./curso";

export class Estudiante {

    // Propiedades de clase
    nombre: string;
    apellidos?:string;
    cursos: Curso[];

    private ID: string = "1234";
    
    constructor(nombre: string,cursos: Curso[] ,apellidos?:string){

        this.nombre = nombre;
        this.apellidos= apellidos? apellidos: undefined;
        this.cursos = cursos;
    }

    get horasEstudiadas (): number{
        let horasEstudiadas = 0;
        this.cursos.forEach((curso: Curso) => {
         

            horasEstudiadas += curso.horas;
        })

        return horasEstudiadas;
    }

    get ID_Estudiante (): string{
        return this.ID;
    }

    set ID_Estudiante (id: string){
        this.ID = id;
    }

}
