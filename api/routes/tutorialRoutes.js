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

	app.post('/tutorials', (req, res) => {
	  const requiredFields = ['name', 'description', 'labels'];
	  for (let i=0; i<requiredFields.length; i++) {
	    const field = requiredFields[i];
	    if (!(field in req.body)) {
	      const message = `\`${field}\` is missing`
	      console.error(message);
	      return res.status(400).send(message);
	    }
	  }
	  Tutorial.create({
	    name: req.body.name,
	    description: req.body.description,
	    labels: req.body.labels,
	    website: req.body.website,
	    notes: req.body.notes,
	    difficulty: req.body.difficulty,
	    creator: req.body.creator,
	    userID: req.body.userID
	  }).then(
	    tutorial => res.status(201).send(tutorial)
	  ).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});	

	app.put('/tutorials/:id', (req, res) => {
	  const requiredFields = ['name', 'description', 'labels'];
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
	  console.log(`Updating the tutorial with id \`${req.params.id}\``);
	  Tutorial.findByIdAndUpdate(req.params.id, {$set: {
	    id: req.params.id,
	    name: req.body.name,
	    description: req.body.description,
	    labels: req.body.labels,
	    website: req.body.website,
	    notes: req.body.notes,
	    difficulty: req.body.difficulty,
	    creator: req.body.creator,
	    complete: req.body.complete
	  }},{new:true}).exec().then(tutorial => {
	    console.log(`Updated the Tutorial with id \`${tutorial.id}\``);
	    res.status(201).send(tutorial);
	  }).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});

	app.delete('/tutorials/:id', (req, res) => {
	  console.log(`Deleting tutorial with id \`${req.params.id}\``);
	  Tutorial.findByIdAndRemove(req.params.id).exec().then(tutorial => {
	    console.log(`Deleted the tutorial with id \`${tutorial.id}\``);
	    res.status(204).end();
	  }).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});	
	
}