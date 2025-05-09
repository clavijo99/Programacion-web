const express = require('express');
const cors = require('cors')
const morgan = require('morgan')


// crear aplicacion de express
const app = express();


// middleware 
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());



app.get('/' , (req, res) =>  res.json("bienvenido") );
app.get('/users' , (req, res) => {

const users = [
    {
        "name": "juan",
        "username": "123",
        "age": 20
    },
    {
        "name": "pedro",
        "username": "pedro@",

        "age": 22
    },
    {
        "name": "santiago",
        "username": "santiago123",
        "age": 12
    }
]

res.json({ "users": users })

});


// puerto 3001
const PORT = process.env.PORT  || 3001;


// lanzar el servidor o inicar
app.listen( PORT , () => {
    console.log(`El sevidor esta corriendo en el puerto ${PORT}`)
} )


