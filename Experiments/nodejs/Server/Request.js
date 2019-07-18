const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function(request, respond){
    if(request.url == '/environment1' || request.url == '/'){
        //fs.readFile('D:\\SeniorTree\\GameTechnology\\Experiments\\data\\GameWorld\\Data\\Environment1\\Environment1.json', (err, data) => {
        fs.readFile('D:\\SeniorTree\\GameTechnology\\Experiments\\data\\GameWorld\\Data\\Environment1\\mapData\\map1_2x2.json', (err, data) => {
            if(err) throw err;
            let Environment1 = JSON.parse(data);
            console.log(JSON.stringify(Environment1));
            respond.writeHead(200, {'Content-Type': 'application/json'});
            respond.end(JSON.stringify(Environment1));
        })
    }

}).listen(8080);
