'use strict';
const express = require("express");
const app = express();
const routes = require("./routes/routes.js");
const engine = require('consolidate');
const bodyParser = require('body-parser');
const logger = require("morgan");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
	if(req.method === "OPTIONS"){
		res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
		return res.status(200).json({});
	}
	next();
});

app.use("/", routes);

app.use(function(req, res){
	res.render('404');
})

app.use(function(err, req, res, next){
	res.status(err.status || 500);
	res.json({
		error: {
			message: err.message
		}
	});
});

let port = process.env.PORT || 2121;

app.listen(port, function(){
	console.log("server jalan di port:", port);
})