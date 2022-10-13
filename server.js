<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.static('build'));
app.use(cors());
=======
const https = require('https');
const http = require('http');

const fs = require('fs');

>>>>>>> 3d1afbd646e27f17a36a7bf5612183bc1b3fda94

const app = express();
app.use(cors());

// create new express app and save it as "app"
app.get('/', function (req, res) {
  res.sendFile(path.join(dirname, 'build', 'index.html'));
});
app.get('/login', function (req, res) {
<<<<<<< HEAD
     res.sendFile(path.join(__dirname, 'build', 'index.html'));
=======
  res.sendFile(path.join(dirname, 'build', 'index.html'));
>>>>>>> 3d1afbd646e27f17a36a7bf5612183bc1b3fda94
});
app.get('*', function(req, res){
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Listen both http & https ports
const httpServer = http.createServer(app);
const httpsServer = https.createServer({
<<<<<<< HEAD
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: 'lokita1212'
=======
  key: fs.readFileSync('/etc/letsencrypt/live/my_api_url/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/my_api_url/fullchain.pem'),
>>>>>>> 3d1afbd646e27f17a36a7bf5612183bc1b3fda94
}, app);

httpServer.listen(80, () => {
    console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
<<<<<<< HEAD
});
=======
});
>>>>>>> 3d1afbd646e27f17a36a7bf5612183bc1b3fda94
