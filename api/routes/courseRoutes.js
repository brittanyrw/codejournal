const Course = require('../models/course');

module.exports = function(app){
	 
	 app.get('/courses', (req, res) => {
	  Course.find({userID: req.body.userID}).exec().then(courses =>
	    res.json(courses)
	  ).catch(err => {
	    console.error(err);
	    res.status(500).json({message: 'Internal server error'});
	  });
	});

}