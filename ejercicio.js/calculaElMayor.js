/**Ejercicio 2: Calculando el mayor
1. Declara una función que se llama calculoMayor() y pásale como parámetros
(num1,num2).
2. Dentro de la función muestra una alerta que diga quién de los números
ingresados es mayor. En caso de ser iguales, tendrá que indicarlo a través
de una alerta también.
3. Invoca la función y llena los argumentos con los números que desees. */

function calculoMayor(num1, num2) {
    
    if (num1 > num2) {
        return "El número mayor es: " + num1;
    } else if (num2 > num1) {
        return "El número mayor es: " + num2;
    } else {
        return "Los números son iguales";
    }

}

// Invocamos la función
let resultado = calculoMayor(10, 20);

//  Mostramos en pantalla
document.getElementById("resultado").innerHTML = resultado;