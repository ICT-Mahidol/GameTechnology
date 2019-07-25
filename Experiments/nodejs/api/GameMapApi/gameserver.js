// Author: Pisit Praiwattana
// pisit.pra@mahidol.ac.th
// @description basic RESTful skeleton to generate a routing mapping for resource access and webservice using nodeJS the current version demonstrates accessing and modified server json file without persistent save, in the next version mongoDB may be utilised
"use strict";

//const mongoose = require('moongoose');
//const Schema = mongoose.Schema;

const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

// Setup middleware to accept application/json, and application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

const routes = require('./routes/gameServerRoute'); // Load the routing

routes(app);

// Start server
app.listen(port, () => {
    console.log('API server started on: ' + port);
});

