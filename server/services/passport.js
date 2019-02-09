const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const config = require('../config');

passport.use(
	new GoogleStrategy({
		clientID: config.googleClientID,
		clientSecret: config.googleClientSecret,
		callbackURL: '/auth/google/callback',
	})
);
