const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('./db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ Register Route
app.post('/register', async (req, res) => {
     console.log("Register function is being called");
  const { firstName, lastName, dob, email, phone, password } = req.body;

  if (!firstName || !lastName || !dob || !email || !phone || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password.trim(), 10);

    const sql = `
      INSERT INTO users (first_name, last_name, dob, email, phone, password)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [firstName, lastName, dob, email.trim(), phone, hashedPassword], (err, result) => {
      if (err) {
        console.error('Registration Error:', err);
        return res.status(400).json({ message: 'Email already exists or registration failed.' });
      }
      res.status(200).json({ message: 'Registration successful' });
    });
  } catch (error) {
    console.error('Server error during registration:', error);
    res.status(500).json({ message: 'Server error during registration.' });
  }
});

// ✅ Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email.trim()], async (err, result) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (result.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = result[0];

    try {
      const isMatch = await bcrypt.compare(password.trim(), user.password);

      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
              console.log("Login Successful ");
      res.status(200).json({
        message: 'Login successful',
        user: {
          id: user.id,
          fullName: user.first_name + ' ' + user.last_name,
          email: user.email
        }
      });
    } catch (error) {
      console.error("Password comparison failed:", error);
      return res.status(500).json({ message: 'Internal error during login' });
    }
  });
});

// ✅ Health Check
app.get('/', (req, res) => {
  res.send('Backend API is working!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
