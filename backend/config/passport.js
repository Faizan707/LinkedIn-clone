import User from '../model/user.model.js';
import GoogleStrategy from 'passport-google-oauth20';
import cloudinary from './cloudinary.js';
export default function configurePassport(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL,
        scope: ['profile', 'email'],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const existingUser = await User.findOne({ googleId: profile.id });
          if (existingUser) return done(null, existingUser);
          const imageURL = profile.photos[0].value;
          const uploadResult = await cloudinary.uploader.upload(imageURL, {
            folder: 'users/profile_images',
          });
          const newUser = await User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
            avatar: uploadResult.secure_url,
          });

          return done(null, newUser);
        } catch (err) {
          done(err, null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => done(null, user));
  });
}
