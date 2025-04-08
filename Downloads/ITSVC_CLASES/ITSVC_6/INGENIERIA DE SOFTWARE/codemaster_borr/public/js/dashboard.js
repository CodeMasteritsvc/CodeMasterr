document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role');

    if (role) {
        console.log('Rol en dashboard:', role);
        // Aquí puedes mostrar contenido diferente dependiendo del rol
        // Por ejemplo:
        if (role === 'alumno') {
            document.querySelector('.sidebar-nav').innerHTML = 'Contenido específico para alumno';
        } else if (role === 'docente') {
            document.querySelector('.sidebar-nav').innerHTML = 'Contenido específico para docente';
        }
    }
});
