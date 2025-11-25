class Animal {
    sonar() {
        console.log("El animal hace un sonido");
    }
}
class Perro extends Animal {
    sonar() {
        console.log("El perro ladra: ¡Guau!");
    }
}
class Gato extends Animal {
    sonar() {
        console.log("El gato maúlla: ¡Miau!");
    }
}
// Lista de animales para demostrar polimorfismo
let animales: Animal[] = [
    new Perro(),
    new Gato(),
];
for (let a of animales) {
    a.sonar(); // Se llama el método correcto según el tipo real
}
