const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypy = require('bcryptjs');
const passportJWT = require('passport-jwt');
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const User = require('../models/user');
const config = require('../config');

passport.use(
	new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password'
	},
	async (email, password, cb) => {
		try {
			const user = await User.findOne({ email }).exec();

			if (!user) {
				return cb(null, false, {message: 'Incorrect email or password.'});
			}

			const isPassValid = await bcrypy.compare(password, user.password);

			if (!isPassValid) {
				return cb(null, false, {message: 'Incorrect email or password.'});
			}

			return cb(null, user, { message: 'Logged In Successfully' });
		} catch (e) {
			return cb(e);
		}
	}
));

passport.use(
	new JWTStrategy({
		jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
		secretOrKey: config.jwt.secret,
	},
	async (jwtPayload, cb) => {
		try {
			const user = await User.findOne({ _id: jwtPayload.id }).exec();

			return cb(null, user);
		} catch (e) {
			return cb(e);
		}
	}
));