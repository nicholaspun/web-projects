var express = require('express');
var webpack = require('webpack');
var path  = require('path');
var config = require('./webpack.config');
var open = require('open');
var socket = require('socket.io');
var http = require('http');

const port = 3000;
const app = express();
const server = http.Server(app);
const io = socket(server);
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, './src/index.html'));
});

server.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

io.on('connection', function(socket) {
  console.log('a user connected')
})
