/** * Declaración de clases 
 * - this: se usa para referenciar la propiedad de la instancia actual.
 * - Herencia: permite que una clase hija obtenga propiedades de una clase padre.
 */

class Animal {
    constructor(edad, tamano, especie, patas, peso, nombre) {
        this.edad = edad;
        this.tamano = tamano;
        this.especie = especie; // Corregido: era "especi"
        this.patas = patas;
        this.peso = peso;
        this.nombre = nombre; // Añadido para que coincida con tus "new Animal"
    }

    // Método para que el animal realice una accion
    comer() {
        return `${this.nombre} está comiendo.`;
    }
}

// Creación de instancias (objetos)
let perro = new Animal(3, "mediano", "canino", 4, 20, "Firulais");
let gato = new Animal(3, "pequeño", "felino", 4, 5, "Michi");
let pato = new Animal(1, "pequeño", "ave", 2, 2, "Patito");

// --- Clase Dado ---

class Dado { // Por convención, las clases empiezan con Mayúscula
    constructor() {
        this.caras = [1, 2, 3, 4, 5, 6];
    }

    tirarDado() {
        // Genera un índice aleatorio basado en el largo del array
        const resultado = this.caras[Math.floor(Math.random() * this.caras.length)];
        return `Salió un: ${resultado}`;
    }
}

// Ejemplo de uso del dado:
const miDado = new Dado();
console.log(miDado.tirarDado());