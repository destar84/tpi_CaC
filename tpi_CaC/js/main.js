// Escuchamos el botón de navegación
const navbarToggler = document.querySelector('.navbar-toggler');
// Obtenemos la barra de navegación
const navbar = document.querySelector('.navbar');

// Agregamos un evento de clic al botón de navegación
navbarToggler.addEventListener('click', () => {
    // Verificamos si la ventana tiene un ancho menor o igual a 768px
    if (window.innerWidth <= 991) {
        // Obtenemos el estado del menú
        const isCollapsed = navbarToggler.getAttribute('aria-expanded') === 'true';

        // Ajustamos la altura de la barra de navegación dependiendo del estado del menú
        if (!isCollapsed) {
            navbar.style.height = '7vh'; // Menú colapsado
        } else {
            navbar.style.height = '33vh'; // Menú expandido
        }
    }
});

// Restablecemos la altura de la barra de navegación cuando la ventana es más ancha que 768px
window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
        navbar.style.height = '10vh';
    }
});



