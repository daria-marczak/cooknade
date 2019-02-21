const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const history = require('connect-history-api-fallback');
const cookieSession = require('cookie-session');
const path = require('path');
const config = require('./config');

require('./models/User');
require('./services/passport');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(
	cookieSession({
		maxAge: 24 * 60 * 60 * 1000,
		keys: [config.cookieKey],
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./routes/recipes'));
app.use('/auth', require('./routes/auth'));
app.use('/user', require('./routes/user'));

app.use(history());

app.use(function(err, req, res, next) {
	res.status(422).send({ error: err.message });
});

app.listen(process.env.port || 4000, function() {
	console.log('listening for requests');
});

app.use(express.static('client'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

mongoose.connect(config.url);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
