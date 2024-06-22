const express = require('express');
const app = express();

// Ruta raíz que devuelve un mensaje de bienvenida con enlaces a otras rutas
app.get('/', (req, res) => {
    res.send(`
        <h1>Bienvenido a mi aplicación Express!</h1>
        <p><a href="/about">Acerca de</a></p>
        <p><a href="/contact">Contacto</a></p>
    `);
});

// Ruta '/about' que devuelve información sobre el proyecto
app.get('/about', (req, res) => {
    res.send(`
        <h1>Esta es una página sobre la aplicación Express.</h1>
        <p><a href="/">Inicio</a></p>
        <p><a href="/contact">Contacto</a></p>
    `);
});

// Ruta '/contact' que devuelve detalles de contacto
app.get('/contact', (req, res) => {
    res.send(`
        <h1>Contacta con nosotros en: hernan2014@hotmail.com</h1>
        <p><a href="/">Inicio</a></p>
        <p><a href="/about">Acerca de</a></p>
    `);
});

// El servidor escucha en el puerto 3000
app.listen(3000, () => {
    console.log('Aplicación ejecutándose en el puerto 3000');
});
