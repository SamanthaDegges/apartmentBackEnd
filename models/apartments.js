var mongoose = require('mongoose');

var apartmentSchema =  mongoose.Schema({
  unitNum: {type: Number, required: true},
  rent: {type: Number, required: true},
  isAvail: {type: Boolean, default: true},
  sqFt: {type: Number, required: true},
  bedrooms: {type: Number, required: true},
  tenants: [{type: mongoose.Schema.objectId, ref: 'tenants'}]
});

var Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
