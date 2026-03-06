let resultado = document.getElementById("resultado");

if (!resultado) {
    console.log("No existe el div #resultado");
}

let peliculaElegida = prompt(
"Elegí tu película favorita:\n" +
"1 - Harry Potter\n" +
"2 - Titanic\n" +
"3 - Avatar"
);

console.log("Valor crudo:", peliculaElegida);

if (peliculaElegida === null) {
    console.log("El usuario apretó Cancelar");
} else {

    peliculaElegida = peliculaElegida.trim();
    console.log("Valor limpio:", peliculaElegida);
    console.log("Tipo:", typeof peliculaElegida);

    switch (peliculaElegida) {

        case "1":
            console.log("Entró al case 1");
            resultado.innerHTML = `
                <h3>Ticket emitido - Harry Potter</h3>
                <img src="assets/img/harry potter.jpg" width="500">
            `;
            break;

        case "2":
            console.log("Entró al case 2");
            resultado.innerHTML = `
                <h3>Ticket emitido - Titanic</h3>
                <img src="assets/img/titanic.jpg" width="500">
            `;
            break;

        case "3":
            console.log("Entró al case 3");
            resultado.innerHTML = `
                <h3>Ticket emitido - Avatar</h3>
                <img src="assets/img/avatar.jpg" width="500">
            `;
            break;

        default:
            console.log("Entró al default");
            resultado.innerHTML = "<h3>Opción no válida</h3>";
    }
}