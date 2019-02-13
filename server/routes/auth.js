const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get(
	'/google',
	passport.authenticate('google', {
		scope: ['profile'],
	})
);

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
	res.redirect('/auth/current_user');
});

const authCheck = (req, res, next) => {
	if (!req.res) {
		res.redirect('auth/google');
	} else {
		next();
	}
};

router.get('/current_user', authCheck, (req, res) => {
	res.send(req.user);
});

// router.get('/api/logout', (req, res) => {
// 	req.logout();
// 	res.redirect('/');
// });

module.exports = router;
