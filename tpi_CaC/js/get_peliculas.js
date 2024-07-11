

document.addEventListener('DOMContentLoaded', async()) => {

    const options = {
        method: 'GET',
        Headers: {
            'Content-Type': 'application/json'
        }
    }

    const response = await fetch ('http://localhosts:8080/apimovies/peliculas, options';

    const data = await response.json;

    console.log (data);
    
    const movies = data;

    const tbody = document.getElementById('cuerpotablapeliculas');

    movies.forEach (movie => {

        cont tr = document.createElement('tr');
        tr.innerHTML = ´
        <td>${movie.titulo}</td>;
        <td>${movie.genero}</td>;
        <td>${movie.duracion}</td>;
        <td>
            <img width="150px" src="../assets/img/${movie.imagen}" alt="${movie.titulo}">
            </td>;
            ´

            tbody.appendChild(tr);
        
    
    })





    )

}