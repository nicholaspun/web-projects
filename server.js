var express = require('express');
var webpack = require('webpack');
var path  = require('path');
var config = require('./webpack.config');
var open = require('open');
var socket = require('socket.io');
var http = require('http');

const port = 5555;
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

var users = [];

io.on('connection', function(socket) {
  console.log('a user connected')

  socket.on('add user', function(data) {
    users.push(data);
    io.sockets.emit('update users', {users: users});
  })

  socket.on('send message', function(user, msg) {
    io.sockets.emit('new message', {user: user, msg: msg});
  })

})
