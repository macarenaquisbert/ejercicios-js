// 1️ Crear clase que hereda de Ciudadano
class AltaBajaCiudadano extends Ciudadano {

    constructor(nombre, apellido, dni, activo) {
        super(nombre, apellido, dni); // llama al constructor de Ciudadano
        this.activo = activo;
    }

    // 2️ Método mostrarEstado
    mostrarEstado() {
        return `${this.activo} se encuentra activo`;
    }
}

// 3️ Crear objetos
let ciudadano4 = new AltaBajaCiudadano("Carlos", "Diaz", "11223344", "SI");
let ciudadano5 = new AltaBajaCiudadano("Laura", "Martinez", "99887766", "NO");

// 4️ Mostrar estado en consola
console.log(ciudadano4.mostrarEstado());
console.log(ciudadano5.mostrarEstado());