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
* [PostMan](https://www.getpostman.com) - Tool for API Development Environment test
* [NodeJs](https://nodejs.org/en/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

### Instalação

1. Realizar o download ou clone do projeto;
2. Descompactar o projeto;
3. Abrir um terminal de comando a partir da pasta do projeto;
4. Executar o arquivos App.js do projeto a partir do comando:

```
$ node app.js
```



Instalação

1. Download ou clone do projeto.
2. Acessar a pasta do projeto no seu terminal.
3. Executar o comando de download de modules necessarios a execução do projeto via npm:

$ sudo npm install

4. Instalar o banco de dados MangoDB.

5. Executar o servidor:

$ sudo node server.js

6. Acessar a plataforma de seguros no seu navegador (porta 9090):

localhost:9090
