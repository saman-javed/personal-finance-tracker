const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Signup Endpoint
router.post('/signup', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Simple validation (you can add more checks)
  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Create new user
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully!' });

  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});
// routes/auth.js - Add proper error handling
router.post('/login', async (req, res) => {
  console.log('Login request received'); // Debug log
  
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    res.json({ 
      message: 'Login successful!',
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
    
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});
router.get('/hello', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;