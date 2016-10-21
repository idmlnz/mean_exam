console.log('Person Controller Loaded');
var mongoose = require('mongoose');

var Person = mongoose.model('Person');

module.exports = (function() {
  return {
    index: function(req, res) {
      console.log('Index Method of Person Controller');
      Person.find({}, function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          console.log("ZZZZZZ res.json(data)" + data);
          res.json(data);
        }
      })
    },

    create: function(req, res) {
      console.log('Create method of Person Controller');

      //check req.body.name to see if it has @ sign
      if (/* there is not @ sign set */false) {
        res.json({errors: 'no @ sign'});
      }
      else {

        // translate req.body to Person object;i.e., mongoose schema
        var person = new Person(req.body);

        console.log('\nserver controller person: ' + person.firstName);

        person.save(function(err, data) {
          if (err) {
            console.log(err);
            res.json(err);
          } else {
            console.log("### res.json(data): " + data);
            res.json(data);
          }
        })
      } //else
    },

    delete: function(req, res) {
      console.log(req.params);
      Person.findOne({_id: req.params.id}, function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          if (data) {
            Person.remove(data, function(err, data) {
              if (err) {
                console.log(err);
                res.json(err);
              } else {
                res.json(data);
              }
            })
          }
        }
      })
    },
    update: function(req, res) {
      Person.findOne({_id: req.body._id}, function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          console.log(data);
          for (key in req.body) {
            if (key != '_id') {
              data[key] = req.body[key];
            }
          }
          console.log(data);
          data.save(function(err, data) {
            if (err) {
              console.log(err);
              res.json(err);
            } else {
              res.json(data);
            }
          })
        }
      })
    }
  }
}())