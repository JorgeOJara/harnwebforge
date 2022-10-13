const express = require('express')
const https = require('https');
const http = require('http');
const cors = require("cors")
const fs = require('fs');
const path = require('path');
const app = express();

// database libs
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

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
app.post("/CreateCharacter",(reques,response)=>{
  reques.header('Content-Type')  // "application/json"
  reques.header('user-agent')    // "Mozilla/5.0 (Macintosh Intel Mac OS X 10_8_5) AppleWebKi..."
  reques.header('Authorization') // "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
  
  let rawdata  = reques.body.main;
  let data = JSON.parse(rawdata);
  console.log(data);
  response.send("done")
  response.end();

  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
    // var dbo = db.db("mydb");

    // dbo.collection("Characters").insertOne(data, function(err, res) {
    //   if (err) throw err;
    //    console.log("1 document inserted" + myobj );
    //    response.send("done...")
    //   db.close();
  //   });
  // });
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
