const express = require('express');
// const db = require('./db');
// const Team = require('./team/model');
const teamRouter = require('./team/router');
const playerRouter = require('./player/router');
const cityRouter = require('./city/router');
const bodyParser = require('body-parser');
const Player = require('./player/model');

const app = express();
const port = 4000;

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.use(teamRouter);
app.use(playerRouter);
app.use(cityRouter);
app.listen(port, () => console.log(`Listening on :${port}`));
