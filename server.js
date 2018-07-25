const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');
const app = express();
const client = new pg.Client({
    user: 'admin',
    host: 'localhost',
    database: 'tetrisDB',
    password: 'admin',
    port: 5432
  });
const api = require('./routes/api');

client.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', api(client));

app.use( (err, req, res, next) => {
    console.log(err);
    res.status(422).send({error: err.message});
});

app.listen(3000, () => {
    console.log('Port: 3000');
});
