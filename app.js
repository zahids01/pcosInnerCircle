// server.js — ESModule friendly
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import User from './models/User.js';

const app = express();
const port = 8080;

// Fix for __dirname in ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// React SPA fallback (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.post('/join-waitlist', async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: 'User added to waitlist!' });
  } catch (err) {
    res.status(400).json({ error: 'Could not save user. Maybe duplicate email?' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
