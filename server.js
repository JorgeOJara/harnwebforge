const express = require('express');
const path = require('path');
const app = express();
const secureApp =  express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('*', function(req, res){
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(80)
secureApp.use(express.static(path.join(__dirname, 'build')));

secureApp.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
secureApp.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
secureApp.get('*', function(req, res){
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
secureApp.listen(443)
