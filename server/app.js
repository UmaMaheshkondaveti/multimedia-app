require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes');
const cors = require('cors');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.listen(5000, () => console.log('Server running on port 5000'));
