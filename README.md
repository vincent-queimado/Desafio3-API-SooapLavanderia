![Desafio](https://everguard.com.br/desafios/Logo_Sooap.png)

![version](https://img.shields.io/badge/version-1.0.0-blue.svg?longCache=true&style=flat-square)

# Desafio de criação de API para plataforma de gestão de lavanderia.

## Objetivo do desafio

A Sooap é uma lavanderia completa. Lava de camisas e ternos a roupas íntimas e meias. A empresa vai buscar as roupas na casa do cliente, lava e entrega de volta em casa. A ideia é substituir a máquina de lavar dos clientes e fazer com que esse serviço leva e trás seja mais
prático do que as pessoas lavarem as próprias roupas.
Inicialmente, a Sooap só possuirá dois carros para coleta. Um funcionando de domingo a domingo e outro funcionando de terça a sexta. Cada coleta demora 30 minutos.
Ao solicitar uma lavagem, a plataforma verifica se existe algum carro disponível naquele horário e confirma a coleta. Caso não haja, a deve notificar o usuário, para que outro horário seja escolhido.

Implementar uma API REST em NodeJS, que permita o cadastro, login e solicitação de pedidos na
Sooap.


### Requisitos
* [PostMan](https://www.getpostman.com) - Instalar Postman API Development Environment para realização de testes de API.
* [MongoDB](https://www.mongodb.com/) - Instalar MongoDB Community Server - NoSQL database para simular armazenamento de dados de cadastros.
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
$ node server.js
```

### API de Cadastro de Usuário

Endpoint: http://localhost:9090/users/register

Campos obrigatórios (key): username, password, lastName, firstName, address, phone

Observação: Valor de campo de senha "password" criptografado através de hash.

Resultado:
```
{
    "message": "Usuário vincent cadastrado com sucesso!"
}
```

<p align="center">
  <img src="https://everguard.com.br/desafios/API_Cadastro_Usuario.png" width="500" title="Teste de API de Cadastro de Usuário" alt="Cadastro">
</p>

### API de Login de Usuário

Endpoint: http://localhost:9090/users/authenticate

Campos obrigatórios (key): username, password


Resultado:
```
{
    "_id": "5ce0ba4ac8e4fc1a000ef6b8",
    "username": "vincent",
    "firstName": "Vincent",
    "lastName": "Queimado",
    "createdDate": "2019-05-19T02:07:06.445Z",
    "__v": 0,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Y2UwYmE0YWM4ZTRmYzFhMDAwZWY2YjgiLCJpYXQiOjE1NTgyMzE5ODl9.miAy_EhYhSXiHCYYLCaI-yA84uYX49FHwu2wmObCETc"
}
```
<p align="center">
  <img src="https://everguard.com.br/desafios/API_LoginUsuario.png" width="500" title="Teste de API de Login" alt="Login">
</p>

### API de solicitação de coleta de roupas para lavagem

Endpoint: http://localhost:9090/orders/register

Acesso permitido apenas após realizar o login via Token gerado pelo usuário. Para simulação, selecionar o modo de authenticação "Bearer TOKEN_STRING" na aba de configuração de autorização da ferramenta de teste PostMan.

Campos obrigatórios (key): userId, clothes, schedule

Configuração do token de usuário para teste de pedido:

<p align="center">
  <img src="https://everguard.com.br/desafios/API_Token_Mode.png" width="500" title="Configuração do Token" alt="Token_Mode">
</p>


Resultado em caso de sucesso da solicitação:
```
{
    "message": "Pedido cadastrado com sucesso!"
}
```

<p align="center">
  <img src="https://everguard.com.br/desafios/API_PedidoColeta.png" width="500" title="Teste de API de Pedido de coleta de roupas" alt="Pedido_Coleta">
</p>

Resultado em caso de tentativa de cadastro por usuário desconhecido no sistema:
```
{
    "message": "Usuário inválido. O pedido não pode ser cadastrado!"
}
```

<p align="center">
  <img src="https://everguard.com.br/desafios/API_PedidoColeta_Invalida.png" width="500" title="Teste de API de Pedido de coleta com usuário desconhecido" alt="Pedido_Coleta">
</p>

