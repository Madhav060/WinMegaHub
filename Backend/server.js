const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize, testConnection } = require('./config/db'); // ✅ correct import
const certificateRoutes = require('./routes/certificateRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

// Test DB Connection
testConnection(); // ✅ now this works

app.get('/', (req, res) => res.send('API Running'));
app.use('/certificates', certificateRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
