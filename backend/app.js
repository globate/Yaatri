const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');
const travelRoutes = require('./routes/travelRoutes');
const connectDB = require('./config/db');

const app = express();

// DB connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/travel', travelRoutes);

module.exports = app;
