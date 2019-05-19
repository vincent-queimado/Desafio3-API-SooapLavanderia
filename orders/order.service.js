const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Order = db.Order;
const User = db.User;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Order.find(); //.select('');
}

async function getById(id) {
    return await Order.findById(id); //.select('');
}

async function create(orderParam) {
    console.log(orderParam);

    if (orderParam.userId.match(/^[0-9a-fA-F]{24}$/)) {

        if (await !User.findById(orderParam.userId)) {
            throw 'Usuário não existe. O pedido não pode ser cadastrado!';
        } else {
            // if (await Order.findOne({ schedule: orderParam.schedule })) {
            //     throw 'Sem disponibilidade de veículo para coleta neste horário. Escolha outro horário! ';
            // }

            const order = new Order(orderParam);

            await order.save();

        }
    } else {
        throw 'Usuário invalido. O pedido não pode ser cadastrado!';
    }

}

async function update(id, orderParam) {
    const order = await Order.findById(id);

    if (!order) throw 'Pedido não encontrado!';

    if (await Order.findOne({ schedule: orderParam.schedule })) {
        throw 'Sem disponibilidade de veículo para coleta neste horário. Escolha outro horário! ';
    }

    // copia os campos para o usuario
    Object.assign(order, orderParam);

    await order.save();
}

async function _delete(id) {
    await Order.findByIdAndRemove(id);
}