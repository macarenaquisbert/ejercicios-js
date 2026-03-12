/**
Ejercicios de métodos avanzados
de arrays
    EJERCICIO 1: Mis amigos.
    Probablemente te acuerdes de este ejercicio que ya lo hemos trabajado
    antes, pues ahora filtraremos los amigos con el método filter(). Recuerda
    que el programa debe filtrar el arreglo y devolver uno nuevo con el nombre
    de sus amigos. Si un nombre tiene exactamente 4 letras, ¡puedes estar
    seguro que es amigo tuyo! De lo contrario, no lo son.
    const amigo = [“Ryan”, “Kieran”, “Mark”, “Miguel”]
    El resultado esperado es [“Ryan”, “Mark”]
        EJERCICIO 2: Corrigeme la frase.
        Tenemos un arreglo llamado frases con varias sentencias al azar. Usá la función
        map() para que cada frase empiece y termine con signos de exclamación.
        const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];
        El resultado esperado es
        console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
        console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!',
        '¡Stet lorem amet.!' ] 
*/
const amigo = ["Ryan", "Kieran", "Mark", "Miguel"];

const amigosFiltrados = amigo.filter(function(nombre){
    return nombre.length === 4;
});

console.log(amigosFiltrados);

/** */
const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

const frasesExclamadas = frases.map(function(frase){
    return "¡" + frase + "!";
});

console.log(frases);
console.log(frasesExclamadas);