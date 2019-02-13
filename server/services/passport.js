const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('../config');
const mongoose = require('mongoose');

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
	new GoogleStrategy(
		{
			clientID: config.googleClientID,
			clientSecret: config.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true,
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleID: profile.id })
				.then(currentUser => {
					if (currentUser) {
						console.log(currentUser);

						return done(null, currentUser);
					} else {
						new User({ googleId: profile.id, name: profile.displayName }).save().then(newUser => {
							return done(null, newUser);
						});
					}
				})
				.catch(error => {
					console.log(error, 'Promise error');
				});
		}
	)
);
