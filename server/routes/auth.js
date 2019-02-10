const passport = require('passport');
// const User = require('../modules/User');

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['https://www.googleapis.com/auth/plus.login'],
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
		console.log(req, res);
		res.redirect('http://localhost:8080/');
	});
};
