// 1️ Crear la clase Ciudadano
class Ciudadano {

    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    // 2️ Método mostrar
    mostrar() {
        return `El ciudadano ${this.nombre} ${this.apellido}, tiene el siguiente número de dni: ${this.dni}`;
    }
}

// 3️ Crear objetos (instancias)
let ciudadano1 = new Ciudadano("Ana", "Gomez", "12345678");
let ciudadano2 = new Ciudadano("Luis", "Perez", "87654321");
let ciudadano3 = new Ciudadano("Maria", "Lopez", "45678912");

// 4️ Mostrar en consola
console.log(ciudadano1.mostrar());
console.log(ciudadano2.mostrar());
console.log(ciudadano3.mostrar());