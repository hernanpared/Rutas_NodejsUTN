const express = require('express');
const app = express();

// Ruta raíz que devuelve un mensaje de bienvenida con enlaces a otras rutas
app.get('/', (req, res) => {
    res.send(`
        <h1>Bienvenido a mi aplicación Express!</h1>
        <p><a href="/about">Acerca de</a></p>
        <p><a href="/contact">Contacto</a></p>
        <p><a href="/saludo/Visitante">Saludar a Visitante</a></p>
    `);
});

// Ruta '/about' que devuelve información sobre el proyecto
app.get('/about', (req, res) => {
    res.send(`
        <h1>Esta es una página sobre la aplicación Express.</h1>
        <p><a href="/">Inicio</a></p>
        <p><a href="/contact">Contacto</a></p>
        <p><a href="/saludo/Visitante">Saludar a Visitante</a></p>
    `);
});

// Ruta '/contact' que devuelve detalles de contacto
app.get('/contact', (req, res) => {
    res.send(`
        <h1>Contacta con nosotros en: contacto@example.com</h1>
        <p><a href="/">Inicio</a></p>
        <p><a href="/about">Acerca de</a></p>
        <p><a href="/saludo/Visitante">Saludar a Visitante</a></p>
    `);
});

// Ruta dinámica que varía según el parámetro recibido
app.get('/saludo/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send(`
        <h1>¡Hola, ${nombre}!</h1>
        <p><a href="/">Inicio</a></p>
        <p><a href="/about">Acerca de</a></p>
        <p><a href="/contact">Contacto</a></p>
    `);
});

// Configura el servidor para escuchar en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
