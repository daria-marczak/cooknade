const passport = require('passport');

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

module.exports = router;
