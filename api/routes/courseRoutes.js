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

	app.post('/courses', (req, res) => {
	  const requiredFields = ['name'];
	  for (let i=0; i<requiredFields.length; i++) {
	    const field = requiredFields[i];
	    if (!(field in req.body)) {
	      const message = `\`${field}\` is missing`
	      console.error(message);
	      return res.status(400).send(message);
	    }
	  }
	  Course.create({
	    name: req.body.name,
	    description: req.body.description,
	    labels: req.body.labels,
	    website: req.body.website,
	    notes: req.body.notes,
	    difficulty: req.body.difficulty,
	    creator: req.body.creator,
	    date: req.body.date,
	    type: req.body.type,
	    address: {
	    	street: req.body.street,
	    	city: req.body.city,
	    	state: req.body.state,
	    	zipcode: req.body.zipcode,
	    },
	    userID: req.body.userID
	  }).then(
	    course => res.status(201).send(course)
	  ).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});	
	
	app.put('/courses/:id', (req, res) => {
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
	  console.log(`Updating the course with id \`${req.params.id}\``);
	  Course.findByIdAndUpdate(req.params.id, {$set: {
	    id: req.params.id,
	    name: req.body.name,
	    type: req.body.type
	  }},{new:true}).exec().then(course => {
	    console.log(`Updated the course with id \`${course.id}\``);
	    res.status(201).send(course);
	  }).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});

	app.delete('/courses/:id', (req, res) => {
	  console.log(`Deleting course with id \`${req.params.id}\``);
	  Course.findByIdAndRemove(req.params.id).exec().then(course => {
	    console.log(`Deleted the course with id \`${course.id}\``);
	    res.status(204).end();
	  }).catch(err => {
	    console.error(err);
	    res.status(500).send({message: 'Internal server error'});
	  });
	});	

}