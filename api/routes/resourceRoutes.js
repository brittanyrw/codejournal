const Resource = require('../models/resource');

module.exports = function(app, passport){
	 
	 app.get('/resources', (req, res) => {
	  Resource.find({userID: req.body.userID}).exec().then(resources =>
	    res.json(resources)
	  ).catch(err => {
	    console.error(err);
	    res.status(500).json({message: 'Internal server error'});
	  });
	});

}