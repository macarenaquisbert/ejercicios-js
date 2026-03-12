/**
 * Ejercicio 4: Tirar dados.
*1. Crea un función tirarDado() que cuando sea ejecutada en la consola tire un
*resultado aleatorio del siguiente array:
*const dado = [1,2,3,4,5,6];
*2. Deberás codear dentro del bloque de la función, el lanzamiento aleatorio a
*través de un math.ramdom (pregúntale a san Google como funciona este
*señor).
 */


function tirarDado() {

    const dado = [1,2,3,4,5,6];

    let numeroAleatorio = Math.floor(Math.random() * dado.length);

    return dado[numeroAleatorio];  // 🔹 ahora devuelve el número
}


// Segunda función que llama a la primera
function mostrarDado() {

    let resultado = tirarDado();

    document.getElementById("resultado").innerHTML =
    "Salió el número: " + resultado;
}


// Invocamos la segunda
mostrarDado();