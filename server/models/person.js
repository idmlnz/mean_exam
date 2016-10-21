var mongoose = require('mongoose');

console.log('Person Model Loaded');

var PersonSchema = mongoose.Schema({
  firstName: {type: String, required: true, minlength: 4},
  question: {type:String},
  surveys: [
    {
      option: {type: String},
      rating: {type: Number}
    }
  ]
}, {timestamps: true});

mongoose.model('Person', PersonSchema);
