/**Ejercicio 3: Métodos de arrays.
Practiquemos los métodos de arrays. Dado el siguiente array:
const listaDeSuper = ["jabon","pasta","azucar","arroz","tomates"];
Instrucciones:
1. Agregue al final del array un nuevo producto "shampoo"
2. Elimine el primer producto del array
3. Consulta el largo del array y muestralo por la consola.
4. Consulta si existe el elemento "shampoo" a través del método indexOf() */
const listaDeSuper = ["jabon","pasta","azucar","arroz","tomates"];

// 1. Agregar shampoo
listaDeSuper.push("shampoo");

// 2. Eliminar el primer producto
listaDeSuper.shift();

// 3. Mostrar largo
console.log("El largo del array es: " + listaDeSuper.length);

// 4. Verificar si existe shampoo
var posicion = listaDeSuper.indexOf("shampoo");

if (posicion !== -1) {
    console.log("Shampoo existe en la lista");
} else {
    console.log("Shampoo no existe en la lista");
}