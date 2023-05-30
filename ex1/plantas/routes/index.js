var express = require('express');
var router = express.Router();
var Planta = require('../controllers/planta');
const Planta = require('../models/planta');

// GET /plantas
router.get('/plantas', function(req, res, next) {
  Planta.list()
    .then(plantas => {
      res.json(plantas);
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro em /plantas"})
    })
});

// v
router.get('/plantas/:id', function(req, res, next) {
  var plantaId = req.params.id;
  Planta.getPlanta(plantaId)
    .then(planta => {
      res.json(planta);
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro em /plantas/:id"})
    })
});

// GET /plantas?especie=EEEE
router.get('/plantas', (req, res, next) => {
  const especie = req.query.especie;
  const query = especie ? { especie: especie } : {};
  Planta.find(query)
    .then(plantas => {
      res.json(plantas);
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro em /plantas?especie=EEEE"})
    })
});

// GET /plantas?implant=AAA
router.get('/plantas', (req, res, next) => {
  const implant = req.query.implant;
  const query = implant ? { implant: implant } : {};
  Planta.find(query)
    .then(plantas => {
      res.json(plantas);
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro em /plantas?implant=AAA"})
    })
});
// GET /plantas/freguesias
router.get('/plantas/freguesias', (req, res, next) => {
  Planta.find().distinct('freguesia')
    .sort()
    .then(freguesias => {
      res.json(freguesias);
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro em /plantas/freguesias"})
    })
});


// GET /plantas/especies
router.get('/plantas/especies', function(req, res, next) {
  Planta.distinct('especie')
    .then(especies => {
      const sortedEspecies = especies.sort((a, b) => a.localeCompare(b));
      res.json(sortedEspecies);
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro em /plantas/freguesias"})
    })
});

// POST /plantas
router.post('/plantas', function(req, res, next) {
  var novaPlanta = new Planta(req.body);

  novaPlanta.save()
    .then(planta => {
      res.status(201).json(planta);
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro no post de plantas"})
    })
});

// DELETE  /plantas/:id
router.delete('/plantas/:id', (req, res, next) => {
  const id = req.params.id;

  Planta.deletePlanta(id)
    .then(planta => {
      res.json(planta);
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na eliminação do produto"})
    })
});
