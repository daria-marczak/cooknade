const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const config = require('../config');

const User = mongoose.model('user');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy({
		clientID: config.googleClientID,
		clientSecret: config.googleClientSecret,
		callbackURL: '/auth/google/callback',
	})
);