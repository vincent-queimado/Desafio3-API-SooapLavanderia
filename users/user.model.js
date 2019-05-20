//Importação de conector e schema de banco de dados via Mangoose 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Definição do documento de usuarios e campos obrigatorios
const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    createdDate: { type: Date, default: Date.now() }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);