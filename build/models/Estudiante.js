"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    constructor(nombre, cursos, apellidos) {
        this.ID = "1234";
        this.nombre = nombre;
        this.apellidos = apellidos ? apellidos : undefined;
        this.cursos = cursos;
    }
    get horasEstudiadas() {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        });
        return horasEstudiadas;
    }
    get ID_Estudiante() {
        return this.ID;
    }
    set ID_Estudiante(id) {
        this.ID = id;
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=Estudiante.js.map