let express = require('express');
//método do express de rota
let router = express.Router()
//Fazer carga do controller
let create = require('./../controller/create')
//Chamo o update e atribuo à variável update
let update = require('./../controller/update')
let remove  = require('./../controller/remove')
let find  = require('./../controller/find')
let edit = require('./../controller/edit')


//rota
router.get('/', find.findCliente)

router.get('/', (req, res) => {
    res.render('client_list')
})
router.get('/new', (req, res) => {
    res.render('client_new')
}) 
router.post('/new', create.createCliente)
router.post('/', create.createCliente)

//rota para usar o methodOverride para fazer o put por meio do node
router.get('/edit/:id', edit.editCliente)

//:id significa que estou passando o id como parâmetro, conforme é requisitado no controlador
router.post('/:id', update.updateCliente)

router.delete('/delete/:id', remove.removeCliente)

//exporta o módulo
module.exports = router;