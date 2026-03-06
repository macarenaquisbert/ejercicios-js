/*Ejercicio 1: Un mensaje de aliento
1. Crea una variable estadoDeAnimo y asignale el método propmt() que le
indique al usuario que ingrese ¿Cómo está? triste o contento.
2. Realiza una condición del estado de ánimo, si el usuario responde que está
"triste", dale un mensaje de aliento en la consola al usuario
*/

// 1. Variable que pide el estado de ánimo
let estadoDeAnimo = prompt("¿Cómo estás? triste o contento");

// Convertimos lo que escribe el usuario a minúsculas
estadoDeAnimo = estadoDeAnimo.toLowerCase();

// 2. Condición
if (estadoDeAnimo === "triste") {
    alert("Animo! Todo pasa y sos más fuerte de lo que creés.");
}else if (estadoDeAnimo === "contento") {
    alert("Me alegro, Que tengas un lindo dia.");
} 
else {
    alert("No entendí tu respuesta. Escribí como te sentis.");
} 