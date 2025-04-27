import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import User from './models/user.js';  // User model with username and password

const app = express();
const port = 3000;

// MongoDB connection
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
main().then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Fix __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ======= Middlewares =======
app.use(express.json());  // Correct place
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'secretcode123',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// ======= Passport Config =======
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// ======= API ROUTES =======

// Signup Route
app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Signup failed.' });
  }
});

// Login Route (Custom handling)
app.post('/api/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({ error: info.message || 'Login failed' });
    }
    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.json({ message: 'Login successful', user: { username: user.username } });
    });
  })(req, res, next);
});

// Profile (Protected)
app.get('/api/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ message: 'Profile data', user: { username: req.user.username } });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

// Logout
app.post('/api/logout', (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ error: 'Logout failed.' });
    res.json({ message: 'Logged out successfully' });
  });
});

// ======= Serve Frontend =======
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
