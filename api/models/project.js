var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({

      	created       : {type: Date, default: Date.now},
        name     	  : String,
        creator       : String,
        description	  : String,
        website		  : String,
        github		  : String,
        difficulty	  : String,
        notes         : String,
        labels        : [String],
        complete	  : Boolean,
        userID        : String,
        resources     :[String]
});

module.exports = mongoose.model('Project', projectSchema);