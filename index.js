// Initiate Express
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser'); // middleware

const app = express();
const PORT = 3000;

// View engine setup
app.set('view engine', 'ejs');

// Pakai middleware
app.use(logger('dev'));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

// Routes sbg middleware
const routes = require('./routes/routesIndex');
const login = require('./routes/routesLogin');
const employees = require('./routes/routesEmployees');

app.use('/', routes);
app.use('/login', login);
app.use('/api/employees', employees);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
});
