const GoogleStrategy = require('passport-google-oauth20');
const { google } = require('../utils/config');
const passport = require('passport')

passport.serializeUser((user, done) => {
    let userSession = {
        _id: user.googleId,
        name: user.name,
        image: user.image,
        email: user.email
    }
    done(null, userSession)
})

passport.deserializeUser((userSession, done) => {
    done(null, userSession);
})

const googleStrat = new GoogleStrategy(google, async (accessToken, refreshToken, profile, done) => {
    user = {
        googleId: profile.id,
        name: profile.displayName,
        image: profile._json.picture,
        email: profile._json.email
    }
    done(null, user)
})

module.exports = googleStrat;