var mongoose = require('mongoose');

var tutorialSchema = mongoose.Schema({

      	created       : {type: Date, default: Date.now},
        userId		  : String,
        name     	  : String,
        creator       : String,
        description	  : String,
        website		  : String,
        difficulty	  : String,
        notes         : String,
        labels        : [String],
        complete	  : Boolean
});

module.exports = mongoose.model('Tutorial', tutorialSchema);