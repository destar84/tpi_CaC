

document.addEventListener('DOMContentLoaded', async() => {

    const options = {
        method: 'GET',
        Headers: {
            'Content-Type': 'application/json'
        }
    }

    const response = await fetch('http://localhosts:8080/apimovies/peliculas, options');

    const data = await response.json;

    console.log (data);
    
    const movies = data;

    const tbody = document.getElementById('cuerpotablapeliculas');

    movies.forEach(movie => {

        const tr = document.createElement('tr');
        const tdTitle = document.createElement('td');
        tdTitle.textContent = movie.titulo;
        // creamos un td con la duracion de la pelicula
        const tdDuration = document.createElement('td');
        tdDuration.textContent = movie.duracion;
        // creamos un td con los generos de la pelicula
        const tdGenres = document.createElement('td');
        tdGenres.textContent = movie.genero;
        // creamos un td con la imagen de la pelicula
        const tdImage = document.createElement('td');
        const img = document.createElement('img');
        img.src = "../assets/img/" + movie.imagen;
        img.width = '150';
        img.alt = movie.titulo;
        tdImage.appendChild(img);
        //agrego la clase a la imagen para que se vea mejor de bootstrap fluid y thumbnail
        img.classList.add('img-fluid');
        img.classList.add('img-thumbnail');
        
        // añadimos los td al tr
        tr.appendChild(tdTitle);
        tr.appendChild(tdDuration);
        tr.appendChild(tdGenres);
        tr.appendChild(tdImage);
        // añadimos el tr a al body
        tbody.appendChild(tr);
    
    })

    

});