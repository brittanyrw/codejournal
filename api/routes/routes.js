const Course = require('../models/course');
const Event = require('../models/event');
const Project = require('../models/project');
const Resource = require('../models/resource');
const User = require('../models/user');
const Label = require('../models/labels');
const Tutorial = require('../models/tutorial');

// const userRoutes = require('./userRoutes.js');
const resourceRoutes = require('./resourceRoutes.js');
const projectRoutes = require('./projectRoutes.js');
const eventRoutes = require('./eventRoutes.js');
const courseRoutes = require('./courseRoutes.js');
const labelRoutes = require('./labelRoutes.js');
const tutorialRoutes = require('./tutorialRoutes.js');

module.exports = function(app) {

    // userRoutes(app, passport);
    // challengeRoutes(app, passport);
    resourceRoutes(app);
    projectRoutes(app);
    eventRoutes(app);
    courseRoutes(app);
    labelRoutes(app);
    tutorialRoutes(app);

};