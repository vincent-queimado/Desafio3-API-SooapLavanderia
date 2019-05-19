const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const moment = require('moment');
const momenttz = require('moment-timezone');

const Order = db.Order;
const User = db.User;

const lapsTime = 30;
const cars = 2;
const daysCars = { 1: 1, 2: 2, 3: 2, 4: 2, 5: 2, 6: 1, 7: 1 }; //Seg. a Sex. vs Qtde de Veiculos

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
    var count = null;

    console.log(orderParam);

    // Verifica se o ID do usuario é valido de tipo objeto
    if (await !orderParam.userId.match(/^[0-9a-fA-F]{24}$/)) {
        throw 'Usuário inválido. O pedido não pode ser cadastrado!';
    }

    // Verifica se o ID do usuario exsite no banco de dados
    if (await !User.findById(orderParam.userId)) {
        throw 'Usuário não existe. O pedido não pode ser cadastrado!';
    }

    // Recupera a data de solicitação de coleta, adiciona e substrai 30 minutes
    var dateRecife = moment(orderParam.schedule).utcOffset('-0300').format("YYYY-MM-DDTHH:mm:ss.SSSZ")
    var dateStart = moment(dateRecife).subtract(lapsTime, 'minutes').format('YYYY-MM-DDTHH:mm:ss.SSSZ'); // 30 minutes antes
    var dateStop = moment(dateRecife).add(lapsTime, 'minutes').format('YYYY-MM-DDTHH:mm:ss.SSSZ'); // 30 minutes depois
    var dow = moment(orderParam.schedule).isoWeekday();

    console.log("Range Inicio: " + dateStart);
    console.log("Range Fim: " + dateStop);
    console.log("Dia da semana: " + dow);
    console.log("Veiculos disponiveis:" + daysCars[dow]);


    // Verifica no banco de dados quantos registros de solicitação existem nesse range de tempo
    if (await Order.find({ schedule: { $gte: dateStart, $lte: dateStop } }).exec(function(err, results) { //Busca quantos 
            console.log(results.length);
        }));



    if (await count == 0) {
        console.log("Nenhum pedido encontrado entre " + moment(dateStart).format('YYYY-MM-DD HH:mm') + " a " + moment(dateStop).format('YYYY-MM-DD HH:mm') + ".");
    }

    if (await count >= cars) {
        console.log("Veiculos não disponiveis para coleta neste horario.");
        throw 'Sem disponibilidade de veículo para coleta neste horário. Escolha outro horário! ';
    }

    if (await count > 0 && count < cars) {
        var tmp_cars = daysCars[dow];
        if (count >= tmp_cars) {
            console.log("Veiculos não disponiveis para coleta neste horario.");
            throw 'Sem disponibilidade de veículo para coleta neste horário. Escolha outro horário! ';
        }
    }


    console.log("Pedido cadastrado com sucesso!");

    const order = new Order(orderParam);
    await order.save();

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