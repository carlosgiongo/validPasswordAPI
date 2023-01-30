//Imprta as bibliotecas necessárias para a execução do código
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

//Define as configurações do Express APP
const app = express();
app.use(express.json());
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.set('trust proxy', true);
app.use(cors({
    origin: ['http://192.168.100.46:3000', 'http://localhost:3000', '192.168.100.46'],
    methods: ['GET', 'POST'],
    credentials: true,
    headers: ['*']
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({
    extended: true
})); 
app.use(express.static('public'));

module.exports = {
    app: app
}
