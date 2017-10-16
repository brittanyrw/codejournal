const Label = require('../models/labels');

module.exports = function(app){
	 
	 app.get('/labels', (req, res) => {
	  Label.find({userID: req.body.userID}).exec().then(labels =>
	    res.json(labels)
	  ).catch(err => {
	    console.error(err);
	    res.status(500).json({message: 'Internal server error'});
	  });
	});

}