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

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/harnforge.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/harnforge.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/harnforge.com/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// create new express app and save it as "app"
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



/// building the api.....
app.post("/CreateCharacter",(reques,repsonse)=>{
  console.log(reques.body)
  repsonse.send("got it...")
  repsonse.end();
})

app.get('*', function(req, res){
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});




// Listen both http & https ports
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
    console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});
