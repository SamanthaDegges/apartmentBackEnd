var mongoose = require('mongoose');

var propertySchema =  mongoose.Schema({
  manager: [{type: mongoose.Schema.ObjectId, ref: 'user'}]
  name: String,
  address: String,
  apartments: [{type: mongoose.Schema.ObjectId, ref: 'Apartment'}]
});

//model
var Property = mongoose.model('Property', propertySchema);

module.exports = Property;
