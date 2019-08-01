const express = require('express');
const City = require('./model');
//const Team = require('../team/model');
//const Player =

const { Router } = express;

const router = new Router();
router.get('/city', (req, res, next) => {
  City.findAll()
    .then(result => res.send(result))
    .catch(error => next(error));
});

router.post('/city', (req, res, next) => {
  City.create(req.body)
    .then(result => res.send(result))
    .catch(error => next(error));
});

router.get('/city/:id', (req, res, next) => {
  City.findByPk(req.params.id)
    .then(result => res.send(result))
    .catch(error => next(error));
});

router.put('/city/:id', (req, res, next) => {
  City.findByPk(req.params.id)
    .then(team => team.update(req.body))
    .then(result => res.send(result))
    .catch(error => next(error));
});

router.delete('/city/:id', (req, res, next) => {
  City.destroy({
    where: { id: req.params.id }
  })
    .then(number => res.send({ number }))
    .catch(error => next(error));
});

module.exports = router;
