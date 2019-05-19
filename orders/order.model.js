//Importação de conector e schema de banco de dados via Mangoose 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


//Definição do documento do pedido e campos obrigatorios
const schema = new Schema({
    userId: { type: String, required: true },
    clothes: { type: String, required: true },
    schedule: { type: Date, required: true },
    createdDate: { type: Date, default: Date.now() }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Order', schema);