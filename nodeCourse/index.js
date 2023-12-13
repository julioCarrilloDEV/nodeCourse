const path = require('path')
//Implementação utilizando express
const express = require('express');
//Carrega para a variável os recursos do express
const app = express ()
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
//chamo o arquivo para dentro do meu programa principal.
const home = require('./routes/home');
const client = require('./routes/client');
const fornec = require('./routes/fornec');
const port = 3000;

//definindo pug como linguagem de template engine padrão
app.set('view engine', 'pug');
//definindo as views no mvc
app.set('views', path.join(__dirname, 'views'))

app.use('/assets', express.static('./assets'))

//para trabalhar com requisições post em node, é necessário o bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Caregando meu sequelize
require('./model/index')

//endpoint da aplicação
app.use('/', home);
app.use('/client', client);
app.use('/fornec', fornec);
app.use(methodOverride('_method'))


//Rota o servidor na porta especificada
app.listen(port, () => console.log(`App listening in localhost:${port}`));