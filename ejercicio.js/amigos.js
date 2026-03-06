/**Ejercicio 3: Mis amigos.
Haga un programa que filtre el arreglo y devuelva uno nuevo con el nombre de
sus amigos. Si un nombre tiene exactamente 4 letras, ¡puedes estar seguro que
es amigo tuyo! De lo contrario, no lo son.
const amigo = [“Ryan”, “Kieran”, “Mark”, “Miguel”]
El resultado esperado es [“Ryan”, “Mark”]
Nota: este ejercicio se ha hecho en pruebas técnicas para puestos de
programadores. */

const amigo = ["Ryan", "Kieran", "Mark", "Miguel"];

var amigosVerdaderos = [];

for (var i = 0; i < amigo.length; i++) {
    if (amigo[i].length === 4) {
        amigosVerdaderos.push(amigo[i]);
    }
}

// Mostrar en pantalla en vez de consola
document.getElementById("resultado").innerHTML = amigosVerdaderos;