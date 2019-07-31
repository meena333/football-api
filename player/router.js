const express = require('express');
const Player = require('./model');
const Team = require('../team/model');

const { Router } = express;

const router = new Router();
router.get('/player', (req, res, next) => {
  Player.findAll()
    .then(result => res.send(result))
    .catch(error => next(error));
});

router.post('/player', (req, res, next) => {
  Player.create(req.body)
    .then(result => res.send(result))
    .catch(error => next(error));
});

router.get('/player/:id', (req, res, next) => {
  Player.findByPk(req.params.id, { include: [Team] })
    .then(result => res.send(result))
    .catch(error => next(error));
});

router.put('/player/:id', (req, res, next) => {
  Player.findByPk(req.params.id)
    .then(team => team.update(req.body))
    .then(result => res.send(result))
    .catch(error => next(error));
});

router.delete('/player/:id', (req, res, next) => {
  Player.destroy({
    where: { id: req.params.id }
  })
    .then(number => res.send({ number }))
    .catch(error => next(error));
});

module.exports = router;
