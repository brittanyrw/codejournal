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

	app.post('/resources', (req, res) => {
	  const requiredFields = ['name', 'description', 'labels'];
	  for (let i=0; i<requiredFields.length; i++) {
	    const field = requiredFields[i];
	    if (!(field in req.body)) {
	      const message = `\`${field}\` is missing`
	      console.error(message);
	      return res.status(400).send(message);
	    }
	  }
	  Resource.create({
	    name: req.body.name,
	    description: req.body.description,
	    labels: req.body.labels,
	    website: req.body.website,
	    notes: req.body.notes,
	    creator: req.body.creator,
	    userID: req.body.userID
	  }).then(
	    resource => res.status(201).send(resource)
	  ).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});	

	app.put('/resources/:id', (req, res) => {
	  const requiredFields = ['name'];
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
	  console.log(`Updating the resource with id \`${req.params.id}\``);
	  Resource.findByIdAndUpdate(req.params.id, {$set: {
	    id: req.params.id,
	    name: req.body.name
	  }},{new:true}).exec().then(resource => {
	    console.log(`Updated the resource with id \`${resource.id}\``);
	    res.status(201).send(resource);
	  }).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});

	app.delete('/resources/:id', (req, res) => {
	  console.log(`Deleting resource with id \`${req.params.id}\``);
	  Resource.findByIdAndRemove(req.params.id).exec().then(resource => {
	    console.log(`Deleted the resource with id \`${resource.id}\``);
	    res.status(204).end();
	  }).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});	
	
}