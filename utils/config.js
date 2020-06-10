module.exports = {
    google: {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: 'https://genresume.herokuapp.com/auth/google/callback',
    }
  }