const passport = require('passport');

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['https://www.googleapis.com/auth/plus.login'],
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
		res.send(req.user);
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});

	app.get('/api/logout', (req, res) => {
		req.logout(); // It's automatically attached to the passport. It takes the cookie and destroys it
		res.redirect('/');
	});
};
