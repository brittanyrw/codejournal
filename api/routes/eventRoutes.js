const Event = require('../models/event');

module.exports = function(app){
	 
	 app.get('/event', (req, res) => {
	  Event.find({userID: req.body.userID}).exec().then(events =>
	    res.json(events)
	  ).catch(err => {
	    console.error(err);
	    res.status(500).json({message: 'Internal server error'});
	  });
	});

}