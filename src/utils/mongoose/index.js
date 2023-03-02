const dbConfig=require('../../../config/index').database
const mongoose =require('mongoose');
mongoose.Promise = global.Promise; // Connecting to the database //

mongoose
	.connect(dbConfig.url, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		poolSize:10
	})
	.then(() => {
		console.log("Successfully connected to the database");
	})
	.catch(err => {
		console.log(err);
		console.log("Could not connect to the database. Exiting now...");
		process.exit();
	});
