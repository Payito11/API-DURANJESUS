const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { mongoose } = require('./database');


const app = express();

//Puerto
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: '*' }));

//Rutas
app.use('/api/perro', require('./database'));

//Servidor
app.listen(app.get('port'), () => {
    console.log('servidor en puerto: ' + app.get('port'));
});


