const express = require('express');
const dotenv = require('dotenv'); // Import dotenv
const connectDb = require('./config/db.js');

// config dotenv
dotenv.config();
const port = process.env.PORT || 6000;

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(port, () => {
    connectDb();
    console.log(`Server is running on port ${port}`)
})
