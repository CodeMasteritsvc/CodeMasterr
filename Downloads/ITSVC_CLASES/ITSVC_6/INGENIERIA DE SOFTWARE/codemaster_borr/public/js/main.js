document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const datos = {
            nombre: form.nombre.value,
            email: form.email.value,
            matricula: form.matricula.value,
            fecha_nacimiento: form.fecha_nacimiento.value,
            telefono: form.telefono.value,
            sexo: form.sexo.value,
            password: form.password.value
        };

        try {
            const res = await fetch('http://localhost:3000/api/registro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos)
            });

            const respuesta = await res.json();

            if (res.ok) {
                alert(respuesta.mensaje);
                window.location.href = '/views/auth/login.html'; // Redirige al login
            } else {
                alert('Error: ' + respuesta.mensaje);
            }
        } catch (err) {
            console.error('Error en el registro:', err);
            alert('Ocurrió un error al intentar registrarte.');
        }
    });
});
