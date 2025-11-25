class Persona {
    nombre: string = "";
    edad: number = 0;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log("Hola soy " + this.nombre);
    }
}

class Estudiante extends Persona {
    curso: string = "";
    constructor(nombre: string, edad: number, curso: string) {
        super(nombre, edad); // Llama al constructor de Persona
        this.curso = curso;
    }
    imprimirCurso() {
        console.log("Estoy en el curso: " + this.curso);
    }
}
// Lista de estudiantes
let listaEstudiantes: Estudiante[] = [
    new Estudiante("Luis", 16, "Programación"),
    new Estudiante("Ana", 17, "Diseño Web"),
    new Estudiante("Carlos", 15, "Base de Datos"),
];
// Mostramos la lista completa
console.log(listaEstudiantes);
