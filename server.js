const express = require('express')
const https = require('https');
const http = require('http');
const cors = require("cors")
const fs = require('fs');
const path = require('path');
const app = express();

app.use(cors());
// Declare static folder to be served. It contains the JavaScript code, images, CSS, etc.
app.use(express.static('build'));

// create new express app and save it as "app"
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('*', function(req, res){
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Listen both http & https ports
const httpServer = http.createServer(app);
httpServer.createServer({    
    key: fs.readFileSync('./key.pem'),    
    cert: fs.readFileSync('./cert.pem'),   
    passphrase: 'lokita1212'
  }, app)

httpServer.listen(80, () => {
    console.log('HTTP Server running on port 80');
});

httpServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});
