document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    
    menuButton.addEventListener('click', function() {
        // Alternar la clase 'active' en el botón al hacer clic
        menuButton.classList.toggle('active');
    });
});
