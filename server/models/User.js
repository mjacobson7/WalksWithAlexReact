const mongoose = require('mongoose');
// const bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
	firstName: {
		// every user has a name field, the requirements for which are described below:
		type: String, // the name type is a string
		required: true, // every user has a name, so it's a required field
		minlength: 2, // the minimum length of the name is 2 characters
		maxlength: 30, // the maximum length is 30 characters
	},
	lastName: {
		// every user has a name field, the requirements for which are described below:
		type: String, // the name type is a string
		required: true, // every user has a name, so it's a required field
		minlength: 2, // the minimum length of the name is 2 characters
		maxlength: 30, // the maximum length is 30 characters
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
	},
});

// UserSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // checking if password is valid
// UserSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

module.exports = mongoose.model('User', UserSchema);
