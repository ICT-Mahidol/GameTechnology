const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function(request, respond){
    if(request.url == '/environment1' || request.url == '/'){ //Add path after localhost
        //fs.readFile('D:\\SeniorTree\\GameTechnology\\Experiments\\data\\GameWorld\\Data\\Environment1\\Environment1.json', (err, data) => {
        fs.readFile('D:\\SeniorTree\\GameTechnology\\Experiments\\data\\GameWorld\\Data\\Environment1\\mapData\\map1_2x2.json', (err, data) => { //Read direct file
            if(err) throw err;
            let Environment1 = JSON.parse(data); //Parse data to Environment1
            console.log(JSON.stringify(Environment1));
            respond.writeHead(200, {'Content-Type': 'application/json'}); //Declare content type
            respond.end(JSON.stringify(Environment1)); //Respond back and print map1_2x2.json
        })
    }

}).listen(8080);
