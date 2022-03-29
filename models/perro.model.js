const mongoose = require ('mongoose');
const perroController = require('../controller/perro.controller');
const { model } = require('../database');
const {Schema} = mongoose;

const PerroSchema = new Schema({
    raza : {type: String, required: true},
    tamaño : {type: String, required: true},
    color : {type: String, required: true}
});


perroController.addperro = async (req, res)=>{
   const perro = new perroModel(req.body);
};
module.exports = mongoose.model('perro', PerroSchema);