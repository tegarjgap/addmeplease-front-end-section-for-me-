let express = require('express');
let path = require('path');
let app = express();
let bodyParser = require('body-parser');
let routes =require('./routes/routes.js')
const engine = require('consolidate');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use('/', routes);

app.use(function(req, res){
	res.render('404')
})

app.use(function(err, req, res, next){
	res.status(err.status || 500);
	res.json({
		error: {
			message: err.message
		}
	});
});

app.listen(12345, function(err) {
  if (err) console.error(err);
  console.log('server client jalan');
})
