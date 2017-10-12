var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({

       	created       : {type: Date, default: Date.now},
       	userId		  : String,       	
       	name          : String,
        description   : String,
        website		  : String,
        creator		  : String,
        difficulty	  : String,
        labels		  : [String],
        address		  :  {
        	street	  : String,
        	city	  : String,
        	state	  : String,
        	zipcode	  : String
        },
        date		  : String,
        complete	  : Boolean
});

module.exports = mongoose.model('Event', eventSchema);