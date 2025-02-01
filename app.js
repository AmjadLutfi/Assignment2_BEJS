const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');
const port = 3000

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', authRoutes);
app.use('/', movieRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

module.exports = app;