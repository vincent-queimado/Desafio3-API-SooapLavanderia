const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/authenticate', authenticate); //Endpoint de login
router.post('/register', register); //Endpoint de cadastro de usuario
router.get('/', getAll); //Endpoint de listagem de todos os usuarios
router.get('/current', getCurrent); //Endpoint de listagem do usuario logado
router.get('/:id', getById); //Endpoint de busca de usuario por ID
router.put('/:id', update); //Endpoint de atualização de cadastro de usuario
router.delete('/:id', _delete); //Endpoint de exclusão de cadastro de usuario

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Usuário e/ou senha inválido' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({ message: 'Usuário ' + req.body.username + ' cadastrado com sucesso!' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'Cadastro do usuário atualizado com sucesso!' }))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({ message: 'Cadastro do usuário removido com sucesso!' }))
        .catch(err => next(err));
}