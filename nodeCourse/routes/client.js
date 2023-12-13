let express = require('express');
//método do express de rota
let router = express.Router()
//Fazer carga do controller
let create = require('./../controller/create')
//Chamo o update e atribuo à variável update
let update = require('./../controller/update')
let remove  = require('./../controller/delete')
let find  = require('./../controller/find')


//rota
router.get('/', find.findCliente)

router.get('/', (req, res) => {
    res.render('client_list')
})
router.get('/new', (req, res) => {
    res.render('client_new')
}) 

router.post('/new', create.createCliente)

//:id significa que estou passando o id como parâmetro, conforme é requisitado no controlador
router.put('/:id', update.updateCliente)

router.delete('/:id', remove.deleteCliente)




//exporta o módulo
module.exports = router;