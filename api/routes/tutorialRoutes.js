const Tutorial = require('../models/tutorial');

module.exports = function(app){
	 
	 app.get('/tutorials', (req, res) => {
	  Tutorial.find({userID: req.body.userID}).exec().then(tutorials =>
	    res.json(tutorials)
	  ).catch(err => {
	    console.error(err);
	    res.status(500).json({message: 'Internal server error'});
	  });
	});

}