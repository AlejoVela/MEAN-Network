const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./db/db');
const User = require('./routes/user');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/user', User);

app.listen(process.env.PORT, console.log(`Server is listen OK on port ${process.env.PORT}`))

dbConnection();