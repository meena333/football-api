const Sequelize = require('sequelize');
const db = require('../db');

const Team = db.define(
  'team',
  {
    // name: { type: Sequelize.STRING, field: 'team_name' }
    name: Sequelize.STRING
  },
  // { tableName: 'football_teams' },
  { timestamps: false }
);

module.exports = Team;
