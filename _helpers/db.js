//Importação de config informações de conexão de banco de dados
const config = require('config.json');

//Importação de modulos de conexão ao banco de dados MongoDB
const mongoose = require('mongoose');

//Conector de banco de dados Mangoose
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Order: require('../orders/order.model')

};