var mongoose = require('mongoose');

var userSchema =  mongoose.Schema({
  isManager: {type: Boolean, default: false},
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true}
});

//model
var User = mongoose.model('User', userSchema);

module.exports = User;
