/**
 * Ejercicio 1: Creando y consultando
un objeto
Crea un objeto con el nombre toDoList debería tener las siguientes
propiedades y valores:
    tipo de tarea: un string que diga "Compras" (ojo con los espacios en
    el nombre de la propiedad, tienes que poner entre comillas si tiene
    espacios)
    dia: un string que indique el día a realizar la tarea.
    productos: un array con los nombres de los productos.
    cantidad de productos: un número que indica la cantidad de
    productos de las compras. (Recuerda los espacios en el nombre de
    la propiedad)
    estado: "pendiente"
    notificacion: un método(una función) que haga una alerta con el
siguiente mensaje "Esta tarea tiene una prioridad urgente!".
Ahora desde la consola extrae estos valores de las siguientes formas:
1. El día de la compra usando dot notation.
2. El tipo de tarea usando bracket notation.
3. Extrae la cantidad de productos usando bracket notation.
4. Ejecuta el método (función) de la propiedad notificación (tienes que
extraerlo del objeto y recuerda que es una función)
 */

const toDoList = {
    "tipo de tarea": "Compras",
    dia: "Viernes",
    productos: ["Leche", "Pan", "Huevos", "Arroz"],
    "cantidad de productos": 4,
    estado: "pendiente",
    notificacion: function() {
        alert("Esta tarea tiene una prioridad urgente!");
    }
};
document.write(toDoList.dia + "<br>" );

document.write(toDoList["tipo de tarea"] + "<br>");

document.write(toDoList["cantidad de productos"]);

toDoList.notificacion();

