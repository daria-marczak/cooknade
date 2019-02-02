const express = require('express');
// const connect = require('connect');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const url = require('./config');
const history = require('connect-history-api-fallback');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use('/api', require('./routes/api'));
app.use(history());

app.use(function(err, req, res, next) {
	res.status(422).send({ error: err.message });
});

app.listen(process.env.port || 4000, function() {
	console.log('listening for requests');
});

// const app = connect()
// 	.use(history())
// 	.use(cors())
// 	.use('/api', require('./routes/api'))
// 	.use(function(err, req, res, next) {
// 		res.status(422).send({ error: err.message });
// 	})
// 	.listen(process.env.port || 4000, function() {
// 		console.log('listening for requests');
// 	});

mongoose.connect(url);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
