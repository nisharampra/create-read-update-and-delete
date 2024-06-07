

// const express = require('express');
// const router = express.Router();
// const studentController = require('../controllers/studentControllers');

// // Route to display the form to add a user
// router.get('/adduser', studentController.adduser);

// // Route to save the new user
// router.post('/adduser', studentController.save);

// router.get('/', studentController.view);
// router.get('/edituser/:id', studentController.edituser);
// router.post('/edituser/:id', studentController.edit);


// module.exports = router;
////////////

// const express = require('express');
// const router = express.Router();
// const studentController = require('../controllers/studentControllers');

// // Route to display the form to add a user
// router.get('/adduser', studentController.adduser);

// // Route to save the new user
// router.post('/adduser', studentController.save);

// // Route to view all users
// router.get('/', studentController.view);

// // Route to display the form to edit a user
// router.get('/edituser/:id', studentController.edituser);

// // Route to handle the form submission for editing a user
// router.post('/edituser/:id', studentController.edit);

// module.exports = router;
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentControllers');

// Route to display the form to add a user
router.get('/adduser', studentController.adduser);

// Route to save the new user
router.post('/adduser', studentController.save);

// Route to view all users
router.get('/', studentController.view);

// Route to display the form to edit a user
router.get('/edituser/:id', studentController.edituser);

// Route to handle the form submission for editing a user
router.post('/edituser/:id', studentController.edit);

module.exports = router;
