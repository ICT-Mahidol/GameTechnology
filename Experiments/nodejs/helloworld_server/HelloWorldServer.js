const http = require('http');
const dt = require('./module');
const url = require('url');
const geoip = require('geoip-lite');

function onRequest(req, res) {
    var clientIPaddr = null, clientProxy = null;
    var geo = geoip.lookup(req.ip);

    if(req.headers['vis']) {
        clientIPaddr = req.headers['x-forwarded-for'];
        clientProxy = req.headers['via'];
    } else {
        clientIPaddr = req.connection.remoteAddress;
        clientProxy = "none";
    }
    var pathname = require('url').parse(req.url).pathname;
    if(pathname != "/favicon.ico") {
        console.log("Request for " + pathname);
        console.log("Client:  " + req.headers['user-agent']);
        console.log("IP address:  " + clientIPaddr + " via proxy " + clientProxy);
        console.log("Country: " + (geo ? geo.country: "Unknown"));
        console.log(geo);
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    console.log(dt.DateTime());
    res.end();
}

http.createServer(onRequest).listen(8080);