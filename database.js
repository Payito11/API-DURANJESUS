const mongoose = require('mongoose');
const URL = 'mongodb+srv://Payo11:elpayito29@cluster0.mcx1v.mongodb.net/test';

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('conectado con Mongodb'))
    .catch(err => console.log('error', err));

module.exports = mongoose;