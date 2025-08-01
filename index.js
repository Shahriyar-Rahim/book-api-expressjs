const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express()

const port = process.env.port || 3000

// middleware
app.use(express.json()) //1st step
app.use(cors());

// use routes
const bookRoutes = require('./src/routes/bookRoutes.js');
app.use('/books', bookRoutes);

app.get('/', (req, res) => {
    res.send("Hello World of the root page");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})