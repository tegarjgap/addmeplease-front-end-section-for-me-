'use strict';

let express = require('express');
let router = express.Router();
let User = require('../model/datauser.js');
let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/game');
let db = mongoose.connection;

db.on("error", function(err){
    console.error("connection error:" ,err);
});

db.once("open", function(){
    console.log("db connnection success");
});


//route saat akses halaman "/" dengan metode get, diarahin ke index.html
router.get('/', function(req, res){
    return res.status(200);
})

//route saat akses halaman "/profile", diarahin ke profile.html
router.get('/profile', function(req, res){
	 res.status('200');
     return res.send("ini profile");
})

router.post('/masukinuser', function(req,res){
	if(req.body.Email && req.body.Nama && req.body.Pass){
		res.status(200);
		let tampungan = {
			email: req.body.Email,
			name: req.body.Nama,
			pass: req.body.Pass
		}
		console.log("datauser:" + tampungan);
		User.create(tampungan);
		return res.send('200');
	}else{
		return res.send('aw snap');
	}
})

module.exports = router;