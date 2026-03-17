/**crear una clase que se llame cuidadano y pasar como parametro nombre apellido
 * dni 
 * creale  un metodo funcion a la clase ciudadano qu se llame mostar()
 * este metodo debe retomar  cuidadd thsis.dni,this apellido tiene el seguimiento de numero
 * dedni this dni 
 */
class Ciudadano {
  // El constructor inicializa las propiedades nombre, apellido y dni
  constructor(nombre, apellido, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
  }

  // Método para mostrar la información solicitada
  mostrar() {
    return `Ciudadano: ${this.nombre} ${this.apellido} tiene el seguimiento de número de DNI: ${this.dni}`;
  }
}

// --- Ejemplo de uso ---
const persona1 = new Ciudadano("Juan", "Pérez", "12345678");
console.log(persona1.mostrar());