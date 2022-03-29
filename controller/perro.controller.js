const perroModel = require ('../models/perro.model');
const perroController = {};

perroController.getPerro = async(req, res)=>
{
    const perros = await perroModel.find();
    res.json({'status': 'Perro agregado'});
};



module.exports = perroController;