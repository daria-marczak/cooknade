const passport = require('passport');
const User = require('../modules/User');

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile, email'],
		}),
		function(req, res) {
			console.log(req, res);
		}
	);

	app.get('/auth/google/callback', passport.authenticate('google'));
};
