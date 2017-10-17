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

	app.post('/labels', (req, res) => {
	  const requiredFields = ['name', 'type', 'color'];
	  for (let i=0; i<requiredFields.length; i++) {
	    const field = requiredFields[i];
	    if (!(field in req.body)) {
	      const message = `\`${field}\` is missing`
	      console.error(message);
	      return res.status(400).send(message);
	    }
	  }
	  Label.create({
	    name: req.body.name,
	    type: req.body.type,
	    color: req.body.color
	  }).then(
	    label => res.status(201).send(label)
	  ).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});	

	app.put('/labels/:id', (req, res) => {
	  const requiredFields = ['name', 'type', 'color'];
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
	  console.log(`Updating the label with id \`${req.params.id}\``);
	  Label.findByIdAndUpdate(req.params.id, {$set: {
	    id: req.params.id,
	    name: req.body.name,
	    type: req.body.type,
	    color: req.body.color
	  }},{new:true}).exec().then(label => {
	    console.log(`Updated the label with id \`${label.id}\``);
	    res.status(201).send(label);
	  }).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});

	app.delete('/labels/:id', (req, res) => {
	  console.log(`Deleting label with id \`${req.params.id}\``);
	  Label.findByIdAndRemove(req.params.id).exec().then(label => {
	    console.log(`Deleted the label with id \`${label.id}\``);
	    res.status(204).end();
	  }).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});	

}