const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db.js');

const app = express();

dotenv.config();

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
