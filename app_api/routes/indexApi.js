const express = require('express');
const router = express.Router();

const ctrlApiMajorWinners = require('../controllers/ctrlApiMajorWinners');
const ctrlApiMvpWinners = require('../controllers/ctrlApiMvpWinners');

//list of csgo major winners: teams and years.

router
	.route('/majorWinners')
	.get(ctrlApiMajorWinners.winnersList)
	.post(ctrlApiMajorWinners.addWinner);

// list of major mvp winners: players and years.	

router
	.route('/mvpwinners')
	.get(ctrlApiMvpWinners.winnersList)
	.post(ctrlApiMvpWinners.addWinner);

module.exports = router;
	
	
	