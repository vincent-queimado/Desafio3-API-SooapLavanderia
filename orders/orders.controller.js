const express = require('express');
const router = express.Router();
const orderService = require('./order.service');

// routes
router.post('/register', register); //Endpoint de novo pedido
router.get('/', getAll); //Endpoint de listagem de todos os pedidos do usuario
router.get('/:id', getById); //Endpoint de busca de pedido por ID
router.put('/:id', update); //Endpoint de atualização de pedido
router.delete('/:id', _delete); //Endpoint de exclusão de pedido

module.exports = router;

function register(req, res, next) {
    orderService.create(req.body)
        .then(() => res.json({ message: 'Pedido cadastrado com sucesso!' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    orderService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

// function getCurrent(req, res, next) {
//     orderService.getById(req.order.sub)
//         .then(order => order ? res.json(order) : res.sendStatus(404))
//         .catch(err => next(err));
// }

function getById(req, res, next) {
    orderService.getById(req.params.id)
        .then(order => order ? res.json(order) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    orderService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'Pedido atualizado com sucesso!' }))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    orderService.delete(req.params.id)
        .then(() => res.json({ message: 'Pedido removido com sucesso!' }))
        .catch(err => next(err));
}