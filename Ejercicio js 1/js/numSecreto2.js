/*----------------------------------------------------------------------------
 * Ejercicio 2: Mi número secreto
1. Escribir una condición que le pregunte al usuario cuál es el número
secreto. Ten en cuenta que debes declarar una variable que guarde el
número secreto que tu quieras.
2. Deberás advertirle con un alert() en caso de que esté equivocado o haya
acertado.
*/

// 1. Declaramos el número secreto
let numeroSecreto = 7;

// Le preguntamos al usuario
let numeroUsuario = prompt("¿Cuál es el número secreto?");

// 2. Condición
if (numeroUsuario == numeroSecreto) {
    alert("Adivinaste el número secreto!");
} else {
    alert("No es correcto. Intenta nuevamente.");
}
