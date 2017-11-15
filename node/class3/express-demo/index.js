const express = require('express');
const http = require('http');
const app = express();

// set demo
app.set('title', 'My Site');
app.use('/', (req, res) => {
  const title = app.get('title');
  console.log(title);
});

// enable
app.enable('trust proxy');
console.log(app.get('trust proxy'));
app.disable('trust proxy');
console.log(app.get('trust proxy'));

// enabled
console.log(app.enabled('trust proxy'));
app.enable('trust proxy');
console.log(app.enabled('trust proxy'));

// different environment
// all
app.set('env', 'development');

// debug
if ('development' === app.get('env')) {
  app.set('db uri', 'localhost/dev');
}

// production
if ('production' === app.get('env')) {
  app.set('db uri', 'n.n.n.n/prod');
}

console.log(app.get('db uri'));

// use
app.use('/', (req, res) => {
  console.log(`requset.method: ${req.method}`);
  console.log(`requset.url: ${req.url}`);
  res.end('Hello my express demo!')
});

app.use('/static', express.static(__dirname + '/style.css'));


const server = http.createServer(app);
server.listen('8888');



