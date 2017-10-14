const express = require('express');
const app = express();
const mongoose = require('mongoose');
const flash    = require('connect-flash');
const path   = require('path');
const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const session      = require('express-session');

require('dotenv').config();

var configDB = require('./api/config/database.js');

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

mongoose.connect(configDB.url);

app.use(morgan('dev')); 
app.use(cookieParser()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '/public'))); 
app.use('/', express.static(path.join(__dirname, '/public')));

app.use(express.static('public'));

app.use(session({
    secret: 'secretWatermelon', 
    resave: true,
    saveUninitialized: true 
}));

app.use(flash()); 

require('./api/routes/routes.js')(app); 

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); 
});