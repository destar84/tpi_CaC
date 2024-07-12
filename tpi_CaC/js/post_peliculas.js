

document.addEventListener('DOMContentLoaded', async () => {
    
    formNuevaPelicula = document.getElementById('miFormulario');


    
    formNuevaPelicula.addEventListener('submit', async (event) => {

        const formData = new FormData(formNuevaPelicula);
        const titulo = formData.get('titulo');
        const genero = formData.get('genero');
        const duracion = formData.get('duracion');
        const imagen = formData.get('imagen');
        if (titulo === '' || genero === '' || duracion === '' || imagen === '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        
        const imageName = imagen.name;
      
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                titulo: titulo,
                genero: genero,
                duracion: duracion,
                imagen: imageName
            })
        };

       
        const response = await fetch('http://localhost:8080/apimovies/peliculas', options);
       
        const data = await response.json();


        if (response.status === 201) {
            alert('Pelicula agregada correctamente');
            formNuevaPelicula.reset();
            
            location.reload();
        } else {
            alert('Error al agregar la pelicula');
        }
       
    });

});
        /* const options ={
        method: 'GET',
        Headers: {
            'Content-Type': 'application/json'
        }
    };

    const response = await fetch('http://localhost:8080/apimovies/peliculas', options);

    const data = await response.json();

    console.log(data);

    const movies = data;

    const tbody = document.getElementById('bodyTablePeliculas');

    movies.forEach( movies => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <><td>${movies.titulo}</td>
        <td>${movies.genero}</td>
        <td>${movies.duracion}</td>
        <td> <img width="150px" src="../assets/img/${movies.imagen}" alt="${movies.titulo}"></img>
        </td></>
        `
        tbody.appendChild(tr);
    })
*/














