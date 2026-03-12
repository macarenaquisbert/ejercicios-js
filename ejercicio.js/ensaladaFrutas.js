/**Ejercicio 1: Ensalada de frutas
1. Declara un array llamado ensaladaDeFrutas con al menos 5 frutas.
2. Usa un bucle For y muestra cada ítem de ensaladaDeFrutas en la consola,
con el siguiente mensaje: “Las frutas que hay en la ensalada son: */

// 1. Declarar array
var ensaladaDeFrutas = ["manzana", "banana", "pera", "naranja", "kiwi"];

// 2. Recorrer con for y mostrar en consola
console.log("Las frutas que hay en la ensalada son:");

for (var i = 0; i < ensaladaDeFrutas.length; i++) {
    console.log(ensaladaDeFrutas[i]);
}