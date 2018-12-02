const mongoose = require('mongoose');

const mvpWinnersModel = mongoose.model('mvpWinners');

const winnersList = function (req, res) {
	
	mvpWinnersModel.find({}, function (err, winners) {
		if (err){
			res
				.status(404)
				.json(err);
		}
		else{
			res
				.status(200)
				.json(winners);
		}
}
);
};

const addWinner = function (req, res) {
	res
		.status(201)
		.json({"Add winner player" : "Work in progress"});
};

module.exports = {
	winnersList,
	addWinner
};
