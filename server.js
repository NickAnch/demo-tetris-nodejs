const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const client = new pg.Client({
  user: 'admin',
  host: 'localhost',
  database: 'tetrisDB',
  password: 'admin',
  port: 5432
});
const api = require('./routes/api');
const figure = require('./models/figure');

io.on('connection', (socket) => {
  let interval = setInterval(() => {
    io.emit('message',
      {
        figureColor: figure.
          colors[getRandomInt(0, figure.colors.length)],
        figureShape: figure.
          shapes[getRandomInt(0, figure.shapes.length)]
      });
  }, 3000);

  socket.on('disconnect', function () {
    clearInterval(interval);
  });
});

client.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
    "DELETE, PUT, UPDATE, HEAD, OPTIONS, GET, POST");
  next();
});

app.use('/api', api(client));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(422).send({ error: err.message });
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

http.listen(3000, () => {
  console.log('Port: 3000');
});

