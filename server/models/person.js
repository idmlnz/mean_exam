console.log('Person Model Loaded');
var mongoose = require('mongoose');

var PersonSchema = mongoose.Schema({
    firstName: {type: String, required: true, minlength: 4},
    lastName: {type: String, required: true, minlength: 4},
    birthday: {type:Date}
}, {timestamps: true});

mongoose.model('Person', PersonSchema);
