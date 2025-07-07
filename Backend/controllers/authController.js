const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { name, email, phone, password, role } = req.body;

  // 🔐 Validate input
  if (!name || !email || !phone || !password || !role) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // 🔎 Check if user already exists
    const existingUser = await User.findOne({ where: { email: email.trim() } });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered.' });
    }

    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash(password.trim(), 10);

    // ✅ Create new user
    const newUser = await User.create({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      password: hashedPassword,
      role: role.trim(),
      status: 1
    });

    return res.status(201).json({
      message: 'Registration successful',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    });
  } catch (err) {
    console.error('Register error:', err);
    return res.status(500).json({ message: 'Server error during registration.' });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;

  // 🔐 Input Validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // 🔍 Find user by email
    const user = await User.findOne({ where: { email: email.trim() } });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 🔐 Compare hashed password
    const isMatch = await bcrypt.compare(password.trim(), user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // ✅ Login success
    return res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Internal server error during login' });
  }
};
