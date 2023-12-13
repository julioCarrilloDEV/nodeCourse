let express = require('express');

let router = express.Router();
let create = require('./../controller/create')
let update = require('./../controller/update')
let remove  = require('./../controller/delete')
let find  = require('./../controller/find')


router.get('/', find.findFornecedor)

router.get('/', (req, res) =>{
    res.render('fornec_list');
})

router.get('/new', (req, res) =>{
    res.render('fornec_new');
})

router.post('/new', create.createFornecedor)

router.put('/:id', update.updateFornecedor)

router.delete('/:id', remove.deleteFornecedor)



//Sempre exporte o módulo
module.exports = router