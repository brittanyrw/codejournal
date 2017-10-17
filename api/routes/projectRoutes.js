const Project = require('../models/project');

module.exports = function(app){
	 
	 app.get('/projects', (req, res) => {
	  Project.find({userID: req.body.userID}).exec().then(projects =>
	    res.json(projects)
	  ).catch(err => {
	    console.error(err);
	    res.status(500).json({message: 'Internal server error'});
	  });
	});

	app.put('/projects/:id', (req, res) => {
	  const requiredFields = ['id', 'name'];
	  for (let i=0; i<requiredFields.length; i++) {
	    const field = requiredFields[i];
	    if (!(field in req.body)) {
	      const message = `\`${field}\` is missing`
	      console.error(message);
	      return res.status(400).send(message);
	    }
	  }
	  if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
	    const message = (
	      `Request path id (${req.params.id}) and request body id `
	      `(${req.body.id}) must match`);
	    console.error(message);
	    return res.status(400).send(message);
	  }
	  console.log(`Updating the project with id \`${req.params.id}\``);
	  Project.findByIdAndUpdate(req.params.id, {$set: {
	    id: req.params.id,
	    name: req.body.name,
	    languages: req.body.languages,
	    type: req.body.type,
	    tasks: req.body.tasks,
	    dueDate: req.body.dueDate,
	    complete: req.body.complete
	  }},{new:true}).exec().then(project => {
	    console.log(`Updated the project with id \`${project.id}\``);
	    res.status(201).send(project);
	  }).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});	

	app.delete('/projects/:id', (req, res) => {
	  console.log(`Deleting project with id \`${req.params.id}\``);
	  Project.findByIdAndRemove(req.params.id).exec().then(project => {
	    console.log(`Deleted the project with id \`${project.id}\``);
	    res.status(204).end();
	  }).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});	

}