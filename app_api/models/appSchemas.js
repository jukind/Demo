const mongoose = require('mongoose');

// Schemas define the document structure used in the app
const majorSchema = new mongoose.Schema({year:String, team:String});
const mvpSchema = new mongoose.Schema({year:String, player:String, team:String});

/* Models will contain compiled instances of the schemas
 * so they can be used in the app later on
 */
mongoose.model('majorWinners', majorSchema, 'MajorWinners');
mongoose.model('mvpWinners', mvpSchema,'MvpWinners');



