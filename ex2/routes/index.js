var express = require('express');
var router = express.Router();
var Planta = require('../controllers/planta');

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16);
  Planta.list()
    .then(plantas => {
      res.render('index', { slist: plantas, d: data });
    })
    .catch(erro => {
      res.render('error', { error: erro, message: "Erro na obtenção da lista de plantas" });
    });
});

// GET Plant Form
router.get('/plantas/registo', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16);
  res.render('addForm', { d: data });
});

/* GET Plant page. */
router.get('/plantas/:idPlanta', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16);
  Planta.getPlanta(req.params.idPlanta)
    .then(planta => {
      res.render('planta', { p: planta, d: data });
    })
    .catch(erro => {
      res.render('error', { error: erro, message: "Erro na obtenção do registo de planta" });
    });
});

/* GET Plant Update page. */
router.get('/plantas/edit/:idPlanta', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16);
  Planta.getPlanta(req.params.idPlanta)
    .then(planta => {
      res.render('updateForm', { p: planta, d: data });
    })
    .catch(erro => {
      res.render('error', { error: erro, message: "Erro na obtenção do registo de planta" });
    });
});

/* GET Plant Delete page. */
router.get('/plantas/delete/:idPlanta', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16);
  Planta.getPlanta(req.params.idPlanta)
    .then(planta => {
      res.render('deleteForm', { p: planta, d: data });
    })
    .catch(erro => {
      res.render('error', { error: erro, message: "Erro na obtenção do registo de planta" });
    });
});

router.get('/plantas/deleteConfirm/:idPlanta', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16);
  Planta.deletePlanta(req.params.idPlanta)
    .then(planta => {
      res.redirect('/');
    })
    .catch(erro => {
      res.render('error', { error: erro, message: "Erro na obtenção do registo de planta" });
    });
});

// POST Plant
router.post('/plantas/registo', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16);
  Planta.addPlanta(req.body)
    .then(planta => {
      res.render('addPlantaConfirm', { p: planta, d: data });
    })
    .catch(erro => {
      res.render('error', { error: erro, message: "Erro no armazenamento do registo de planta" });
    });
});

