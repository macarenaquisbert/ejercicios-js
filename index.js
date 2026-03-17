function getCharacters() {
    // Corregido: https y el nombre correcto del dominio
    fetch("https://rickandmortyapi.com/api/character", { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
            // Enviamos el array de resultados a la función que renderiza
            renderCharacters(data.results);
        })
        .catch((error) => console.error("Error al obtener personajes:", error));
}

function renderCharacters(arr) {
    // Seleccionamos el contenedor (asegúrate de que en tu HTML haya un id="items")
    const container = document.querySelector("#items");
    container.innerHTML = ""; // Limpiar contenido previo

    for (let index = 0; index < arr.length; index++) {
        const character = arr[index];

        // Usamos Template Literals (con ` `) para el diseño de la card de Bootstrap
        container.innerHTML += `
            <div class="card" style="width: 18rem; margin: 10px; display: inline-block; vertical-align: top;">
                <img src="${arr[image].name}" class="card-img-top" alt="${character.name}">
                <div class="card-body">
                    <h5 class="card-title">${arr[image].name}</h5>
                    <p class="card-text">
                    </p>
                    <a href="#" class="btn btn-primary">Ver detalles</a>
                </div>
            </div>
        `;
    }
}

// Ejecutar la función
getCharacters();
///
