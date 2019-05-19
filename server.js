require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Authenticação via JWT para acesso as api
app.use(jwt());

// Rotas das API
app.use('/users', require('./users/users.controller'));
app.use('/orders', require('./orders/orders.controller'));

// Gestão de erros
app.use(errorHandler);

// Inicialização do serviço
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 9090;
const server = app.listen(port, function() {
    console.log('Soaap service listening on port ' + port);
});