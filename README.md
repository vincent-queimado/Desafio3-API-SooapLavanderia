![Desafio](https://everguard.com.br/desafios/Logo_Sooap.png)

![version](https://img.shields.io/badge/version-1.0.0-blue.svg?longCache=true&style=flat-square)

# Desafio de criação de API para plataforma de gestão de lavanderia.

## Demo SOOAP

Desafio de API demo: http://www.everguard.com.br/sooap:9090


## Objetivo do desafio

A Sooap é uma lavanderia completa. Lava de camisas e ternos a roupas íntimas e meias. A empresa vai buscar as roupas na casa do cliente, lava e entrega de volta em casa. A ideia é substituir a máquina de lavar dos clientes e fazer com que esse serviço leva e trás seja mais
prático do que as pessoas lavarem as próprias roupas.
Inicialmente, a Sooap só possuirá dois carros para coleta. Um funcionando de domingo a domingo e outro funcionando de terça a sexta. Cada coleta demora 30 minutos.
Ao solicitar uma lavagem, a plataforma verifica se existe algum carro disponível naquele horário e confirma a coleta. Caso não haja, a deve notificar o usuário, para que outro horário seja escolhido.

Implementar uma API REST em NodeJS, que permita o cadastro, login e solicitação de pedidos na
Sooap.


### Requisitos
* [PostMan](https://www.getpostman.com) - Instalar Postman API Development Environment para realização de testes de API.
* [MongoDB](https://www.mongodb.com/) - Instalar MongoDB - NoSQL database para simular armazenamento de dados de cadastros.
* [NodeJs](https://nodejs.org/en/) - Instalar NodeJS - V8 JavaScript engine para executar o projeto.

### Instalação

1. Realizar o download ou clone do projeto;
2. Descompactar o projeto;
3. Abrir um terminal de comando a partir da pasta do projeto;
4. Executar o comando de instalação dos módulos necessários ao projeto via npm:
```
$ npm install
```
5. Executar o arquivos App.js do projeto a partir do comando:
```
$ node app.js
```
