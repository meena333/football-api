const Sequelize = require('sequelize');
const db = require('../db');
//const Team = require('../team/model');

const City = db.define('city', {
  name: Sequelize.STRING,
  population: Sequelize.INTEGER
});

module.exports = City;
