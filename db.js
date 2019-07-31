const Sequelize = require('sequelize');

const databaseUrl = 'postgres://postgres:secret@localhost:5432/postgres';

const db = new Sequelize(databaseUrl);

db.sync()
  .then(() => console.log('The db schema has been updated'))
  .catch(console.error);

module.exports = db;
