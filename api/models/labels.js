var mongoose = require('mongoose');

var labelSchema = mongoose.Schema({

       	name          : String,
        type          : String,
        color		  : String
});

module.exports = mongoose.model('Label', labelSchema);