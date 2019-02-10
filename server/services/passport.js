const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const config = require('../config');
const mongoose = require('mongoose');

const User = mongoose.model('user');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	console.log(id, done);
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: config.googleClientID,
			clientSecret: config.googleClientSecret,
			callbackURL: '/auth/google/callback',
		},
		async function(accessToken, refreshToken, profile, done) {
			const existingUser = await User.findOne({ googleID: profile.id });
			if (existingUser) {
				return done(null, existingUser);
			}

			const user = await new User({ googleID: profile.id, name: profile.displayName }).save();

			done(null, user);
		}
	)
);
