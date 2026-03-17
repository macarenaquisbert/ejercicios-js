/**Ejercicio 2: Promedio de edad
1. Crea un array de edades con al menos 6 edades distintas.
2. Recorre el array y obtén el promedio de las edades del array */

// 1. Crear array
var edades = [18, 22, 30, 25, 19, 27];

// 2. Calcular promedio
var suma = 0;

for (var i = 0; i < edades.length; i++) {
    suma = suma + edades[i];
}

var promedio = suma / edades.length;

console.log("El promedio de las edades es: " + promedio);