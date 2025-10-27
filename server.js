const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const routinesRoute = require('./routes/routines');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/routines', routinesRoute);

// Start server
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));