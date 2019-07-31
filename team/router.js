const express = require('express');
const Team = require('./model');

const { Router } = express;

const router = new Router();
router.get('/team', (req, res, next) => {
  Team.findAll()
    .then(result => res.send(result))
    .catch(error => next(error));
});

router.post('/team', (req, res, next) => {
  Team.create(req.body)
    .then(result => res.send(result))
    .catch(error => next(error));
});

router.get('/team/:id', (req, res, next) => {
  Team.findByPk(req.params.id)
    .then(result => res.send(result))
    .catch(error => next(error));
});

router.put('/team/:id', (req, res, next) => {
  Team.findByPk(req.params.id)
    .then(team => team.update(req.body))
    .then(result => res.send(result))
    .catch(error => next(error));
});

router.delete('/team/:id', (req, res, next) => {
  Team.destroy({
    where: { id: req.params.id }
  })
    .then(number => res.send({ number }))
    .catch(error => next(error));
});

module.exports = router;
