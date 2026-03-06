// Función que filtra amigos según la cantidad de letras
function filtrarAmigos(arr, cantidadLetras) {

    let amigos = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === cantidadLetras) {
            amigos.push(arr[i]);
        }
    }

    return amigos;
}


// Segunda función que muestra en pantalla
function mostrarAmigos() {

    const amigo1 = ["Ryan", "Kieran", "Mark", "Miguel"];
    const amigo2 = ["Ringo","Jhon","Paul","George","Ada","Marie"];

    let resultado1 = filtrarAmigos(amigo1, 4);
    let resultado2 = filtrarAmigos(amigo2, 4);

    document.getElementById("resultado").innerHTML =
        "<b>Resultado amigo1:</b> " + resultado1 + "<br><br>" +
        "<b>Resultado amigo2:</b> " + resultado2;
}


// Invocamos la segunda función
mostrarAmigos();