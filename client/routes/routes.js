let express = require('express');
let router= express.Router();

router.get('/', function(req, res, next){
	res.status(200);
	return res.render('index');
})

router.get('/profile', function(req, res){
	res.status(200);
	return res.render('profile');
})
router.get('/friend', function(req, res){
	res.status(200);
	return res.render('friend');
})

router.post('/profile', function(req, res){
	res.status(200);
	return res.send('profile')
})

module.exports = router;