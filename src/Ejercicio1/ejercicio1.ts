class Persona{
    nombre: string = ""
    edad: number= 0

    constructor(nombre: string, edad:number){
        this.edad=edad
        this.nombre=nombre
    }

    saludar(){
        console.log("Hola soy " + this.nombre)
    }
}

let lista: Persona[] = [
    new Persona("Luis", 25),
    new Persona("Luis", 25),
    new Persona("Luis", 25),
];

console.log(lista)