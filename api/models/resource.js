var mongoose = require('mongoose');

var resourceSchema = mongoose.Schema({

       	created       : {type: Date, default: Date.now},
       	userId		  : String,
       	labels        : [String],
        description   : String,
        website		  : String,
        creator		  : String,
        notes		  : String,
        complete	  : Boolean
});

module.exports = mongoose.model('Resource', resourceSchema);