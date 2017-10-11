const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const flash    = require('connect-flash');
const path   = require('path');
const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const session      = require('express-session');

const Project = require('./api/models/project');

require('dotenv').config();

var configDB = require('./api/config/database.js');

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

mongoose.connect(configDB.url);
require('./api/config/passport')(passport);

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

app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./api/routes/routes.js')(app, passport); 

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); 
});