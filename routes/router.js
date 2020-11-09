const express = require('express');
const router = express.Router();

var publicaciones = [
    {
        viewNombre: 'base-de-datos',
        titulo: '¿Que función cumplen las Bases de Datos?',
        descripcion: 'Sin las bases de datos, no existirá la web como la conocemos.',
        publicadoPor: 'Brayan Durán Velásquez',
        imgPerfilUrl: '/img/perfiles/brayan-duran-velasquez.jpg',
        imgUrl: '/img/base-de-datos/1.jpg',
        diaPublicacion: 'El 07 de noviembre del 2020',
    }
];

publicaciones.forEach(publicacion => {

    router.get('/' + publicacion.viewNombre, (req, res) => {

        res.render('index', {
            viewNombre: publicacion.viewNombre,
    
            titulo: publicacion.titulo,
            publicadoPor: publicacion.publicadoPor,
            imgPerfilUrl: publicacion.imgPerfilUrl,
            imgUrl: publicacion.imgUrl,
            diaPublicacion: publicacion.diaPublicacion,
    
            publicaciones: publicaciones // Toda la informacion de las publicaciones, para ser usadar en las Tarjetas en el "aside"
        });
    })

})

module.exports = router;