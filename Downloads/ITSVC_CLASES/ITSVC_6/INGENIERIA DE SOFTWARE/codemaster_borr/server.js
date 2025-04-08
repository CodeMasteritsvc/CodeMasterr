const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (CSS, JS, imágenes, etc.) desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir 'seleccion_usuario.html' desde la carpeta 'views/auth'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'auth', 'seleccion_usuario.html'));
});

// Ruta para servir el archivo de login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'auth', 'login.html'));
});

// Ruta para el dashboard
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','views', 'dashboard', 'dashboard.html'));
});


// Rutas para las diferentes secciones dentro del dashboard
app.get('/views/dashboard/perfil.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'dashboard', 'perfil.html'));
});

app.get('/views/dashboard/notificaciones.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'dashboard', 'notificaciones.html'));
});

app.get('/views/dashboard/cursos.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'dashboard', 'cursos.html'));
});

app.get('/views/dashboard/nuevos_cursos.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'dashboard', 'nuevos_cursos.html'));
});

app.get('/views/dashboard/ayuda.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'dashboard', 'ayuda.html'));
});

app.get('/views/dashboard/cerrar_sesion.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'dashboard', 'cerrar_sesion.html'));
});

  


// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
