const express = require('express');
const cors = require('cors');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.static('build'));
app.use(cors());

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
const httpsServer = https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: 'lokita1212'
}, app);

httpServer.listen(80, () => {
    console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});
