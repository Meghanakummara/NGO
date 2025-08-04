const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const applicantRoutes = require('./routes/applicantRoutes');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use('/api/applicants', applicantRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
