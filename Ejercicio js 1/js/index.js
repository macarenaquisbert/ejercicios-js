   let pelicula = prompt("Elegí tu película:\n1 - Harry Potter\n2 - Titanic\n3 - Avatar");

    if (pelicula) {
    document.body.classList.add("open");

    document.getElementById("resultado").innerHTML =
        "<h2>La función comienza...</h2>";
    }

