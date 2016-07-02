/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

//Load in the tube lines, call create polylines and send to client when home page is loaded
var tubeLines = [];
var dirPath = path.join(__dirname, 'lines'); 
var files = fs.readdirSync(dirPath);
files.forEach(function (fileName) {
    var file = path.join(dirPath, fileName);
    var tubeLine = new (require(file))();
    tubeLines.push(tubeLine);                   
});

app.get('/lines', function(req,res,next) {

    var polylines = [];
    for (var i=0; i<tubeLines.length; i++) {
        polylines.push({tubeLines[i].name, tubeLines[i].createPolylines();})
    }

    res.json(polylines);
   
});

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
// app.listen(appEnv.port, '0.0.0.0', function() {
//   // print a message when the server starts listening
//   console.log("server starting on " + appEnv.url);
// });
var http = require('http').Server(app);
var io = require('socket.io')(http);
var client;
io.on("connection", function(sio_client) {
    client = sio_client;
});
http.listen(appEnv.port, function() {
    console.log("server starting on "+ appEnv.url);
});
