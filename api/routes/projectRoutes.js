const Project = require('../models/project');

module.exports = function(app){
	 
	 app.get('/project', (req, res) => {
	  Project.find({userID: req.body.userID}).exec().then(projects =>
	    res.json(projects)
	  ).catch(err => {
	    console.error(err);
	    res.status(500).json({message: 'Internal server error'});
	  });
	});

}