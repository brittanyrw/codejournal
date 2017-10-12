var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({

    settings         :[String],
    subjects         :[String],
    events           :[String],
    challenges       :[String],
    projects         :[String],
    courses          :[String],
    resources        :[String],
    cards            :[String]
});

module.exports = mongoose.model('User', userSchema);
