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

	app.post('/events', (req, res) => {
	  const requiredFields = ['name', 'description', 'labels'];
	  for (let i=0; i<requiredFields.length; i++) {
	    const field = requiredFields[i];
	    if (!(field in req.body)) {
	      const message = `\`${field}\` is missing`
	      console.error(message);
	      return res.status(400).send(message);
	    }
	  }
	  Event.create({
	    name: req.body.name,
	    description: req.body.description,
	    labels: req.body.labels,
	    website: req.body.website,
	    notes: req.body.notes,
	    difficulty: req.body.difficulty,
	    creator: req.body.creator,
	    date: req.body.date,
	    address: {
	    	street: req.body.street,
	    	city: req.body.city,
	    	state: req.body.state,
	    	zipcode: req.body.zipcode,
	    },
	    userID: req.body.userID
	  }).then(
	    event => res.status(201).send(event)
	  ).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});	

	app.put('/events/:id', (req, res) => {
	  const requiredFields = ['name', 'type'];
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
	  console.log(`Updating the event with id \`${req.params.id}\``);
	  Event.findByIdAndUpdate(req.params.id, {$set: {
	    id: req.params.id,
	    name: req.body.name
	  }},{new:true}).exec().then(event => {
	    console.log(`Updated the event with id \`${event.id}\``);
	    res.status(201).send(event);
	  }).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});

	app.delete('/events/:id', (req, res) => {
	  console.log(`Deleting event with id \`${req.params.id}\``);
	  Event.findByIdAndRemove(req.params.id).exec().then(event => {
	    console.log(`Deleted the event with id \`${event.id}\``);
	    res.status(204).end();
	  }).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});	
	
}