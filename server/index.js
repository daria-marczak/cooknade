const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const history = require('connect-history-api-fallback');
const path = require('path');
// const proxy = require('http-proxy-middleware');
const config = require('./config');
require('./models/User');
require('./services/passport');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use('/api', require('./routes/api'));

app.use(passport.initialize());
app.use(passport.session());
require('./routes/auth')(app);

app.use(history());

app.use(function(err, req, res, next) {
	res.status(422).send({ error: err.message });
});

app.listen(process.env.port || 4000, function() {
	console.log('listening for requests');
});

app.use(express.static('client'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

mongoose.connect(config.url);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
