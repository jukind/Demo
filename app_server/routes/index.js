const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlmajor = require('../controllers/ctrlmajor'); // ...
const ctrlmvp = require('../controllers/ctrlmvp'); // ...

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/majorWinners', ctrlmajor.winnerlist);  //
router.get('/mvp', ctrlmvp.winnerlist);  //

router
	.route('/majorWinners/add')
	.get(ctrlmajor.showForm)
	.post(ctrlmajor.addData);

module.exports = router;