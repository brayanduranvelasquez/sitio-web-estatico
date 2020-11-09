const express = require('express');
const router = express.Router();

var publicaciones = [{
        viewNombre: 'base-de-datos',
        titulo: '¿Que función cumplen las Bases de Datos?',
        descripcion: 'Sin las bases de datos, no existirá la web como la conocemos.',
        publicadoPor: 'Brayan Durán Velásquez',
        imgPerfilUrl: '/img/perfiles/brayan-duran-velasquez.jpg',
        imgUrl: '/img/base-de-datos/1.jpg',
        diaPublicacion: 'El 07 de noviembre del 2020',
    },
    {
        viewNombre: 'javascript',

        titulo: 'Aprendamos sobre que es Javascript',
        descripcion: 'El lenguaje de programación de los navegadores.',
        publicadoPor: 'Carlos E. Velásquez',
        imgPerfilUrl: '/img/perfiles/carlos-matute.jpg',
        imgUrl: '/img/javascript/1.jpg',
        diaPublicacion: 'El 12 de marzo del 2020',
    },
    {
        viewNombre: 'virus-informatico',

        titulo: 'Los virus informaticos',
        descripcion: 'A todos nos ha tocado lidiar con un virus informatico. ¿Sabes que son capaces de hacer?',
        publicadoPor: 'Cecilia Garcia',
        imgPerfilUrl: '/img/perfiles/cecilia-garcia.jpg',
        imgUrl: '/img/virus-informatico/1.jpg',
        diaPublicacion: 'El 22 de marzo del 2020',
    },
    {
        viewNombre: 'web',

        titulo: 'La web como la conocemos',
        descripcion: '¿Que es la web? aprendamos.',
        publicadoPor: 'Milagros Velásquez',
        imgPerfilUrl: '/img/perfiles/milagros-velasquez.jpg',
        imgUrl: '/img/web/1.jpg',
        diaPublicacion: 'El 16 de mayo del 2020',
    },
];

var reacciones = [{
        viewNombre: 'base-de-datos',
        megustas: 22,
        nomegustas: 2,
    },
    {
        viewNombre: 'javascript',
        megustas: 72,
        nomegustas: 22,
    },
    {
        viewNombre: 'virus-informatico',
        megustas: 105,
        nomegustas: 17,
    },
    {
        viewNombre: 'web',
        megustas: 62,
        nomegustas: 6,
    }
];

var comentarios = [{
        viewNombre: 'base-de-datos',
        comentarios: [{
                nombre: 'Maria',
                apellido: 'Velasquez',
                imgUrl: 'maria-velasquez.jpg',
                diaComentario: '08 de Noviembre del 2020',
                contenido: 'Muy buen contenido. Me ha sido de ayuda.'
            },
            {
                nombre: 'Javianys',
                apellido: 'Hernandez',
                imgUrl: 'javianys.jpg',
                diaComentario: '09 de Noviembre del 2020',
                contenido: 'Sin las bases de datos, no existira las paginas web ni mucho menos los ordenadores.'
            },
        ]
    },
    {
        viewNombre: 'javascript',
        comentarios: [{
            nombre: 'Anabel',
            apellido: 'Cristina M.',
            imgUrl: 'anabel-cristina.jpg',
            diaComentario: '17 de Julio del 2020',
            contenido: '¡Yo amo Javascript! soy desarrolladora frontend.'
        }, ]
    },
    {
        viewNombre: 'virus-informatico',
        comentarios: [{
                nombre: 'Fabiana',
                apellido: 'Bello',
                imgUrl: 'fabiana-bello.jpg',
                diaComentario: '23 de Julio del 2020',
                contenido: 'Me recuerdo cuando tenia un antivirus. Instale un antivirus de pago porque son mas mejores.'
            },
            {
                nombre: 'Gloriannys',
                apellido: 'Torres',
                imgUrl: 'gloriygenesis.jpg',
                diaComentario: '01 de Agosto del 2020',
                contenido: 'Me quedo sorprendida con todo lo que pueden hacer los virus!!!'
            },
            {
                nombre: 'Lorennys',
                apellido: 'Loroño',
                imgUrl: 'lorennys.jpg',
                diaComentario: '27 de Septiembre del 2020',
                contenido: 'Con razón los llaman virus. No sabía sobre esto...'
            },
        ]
    },
    {
        viewNombre: 'web',
        comentarios: []
    },
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

            publicaciones: publicaciones,
            comentarios: comentarios,
            reacciones: reacciones
        });
    })

})

module.exports = router;