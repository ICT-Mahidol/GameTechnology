// Author: Pisit Praiwattana
// pisit.pra@mahidol.ac.th
// @description basic RESTful skeleton to generate a routing mapping for resource access and webserbice using nodeJS the current version demonstrates accessing and modified server json file without persistent save, in the next version mongoDB may be utilised

// dependencies: (more consult on package.json)
// express : create server
// nodemon : keep track of changes to our application by watching changed files then restart server automatically
// moongoose : connect to MongoDB Schema (in the next version)
// body-parser : middle ware to filter request based on anything such as content-type must be json

// Reference articles for this scripts - https://medium.com/@aofleejay/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-restful-api-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-express-express-101-ee37cc4952b4

"use strict";

//const mongoose = require('moongoose');
//const Schema = mongoose.Schema;

const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

let environments = require('./environmentDB');

// Setup middleware to accept application/json, and application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));


// Server routing - base url
app.get('/', (req, res)=>{
    res.set('Content-type', 'text/html');
    res.send("<h1>Welcome to Game Server</h1> <p>You have been monitored!</p>");
});

// Server routing

// GET /environments
// @description return all environments id and its names
app.get('/api/environments', (req, res) => {
    res.type('json'); // shortcut version of set( )
    res.send(environments);
});

// GET /environments/id
// @description receive information of environment id
app.get('/api/environments/:id', (req, res) => {
    res.json(
        environments.find(env => env.id == req.params.id)
    );
});

// POST /environments
// @description create new environment based on the body request json, success code 201
// No actual environment id being kept in the environmentDB yet
app.post('/api/environments', (req, res) => {
    environments.push(req.body);
    res.status(201).json(req.body); 
    
});

// PUT /environments/:id
// @description update the environments' information using id and message body for update filed
// New custom field can be appended freely based on these codes
app.put('/api/environments/:id', (req,res) => {
    const updatedIndex = environments.findIndex(env => env.id == req.params.id);
    res.json( Object.assign(environments[updatedIndex], req.body) );
});

// DELETE /environments/:id
// @description delete an environment in the list based on the associated id in environmentDB.json
// The splice() method adds/removes items to/from an array, and returns the removed item(s); i.e splice(index, 1) 1 indicated the length to be removed
// 204 means NO CONTENT
app.delete('/api/environments/:id', (req, res) => {
    const deletedIndex = environments.findIndex(env => env.id == req.params.id);
    environments.splice(deletedIndex, 1);
    res.status(204).send();
});


// Start server
app.listen(port, () => {
    console.log('API server started on: ' + port);
});

