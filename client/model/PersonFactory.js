/**
 * Created by imalonzo on 10/19/16.
 */

app.factory('PersonFactory', function($http) {
  var factory = {};

  factory.index = function(callback) {
    $http.get('/people').then(function(response) {
      callback(response.data);
    })
  }

  // create user
  factory.create = function(person, callback) {
    console.log('new_person firstName: '  + person.firstName);

    // Go to server/config/routes.js
    $http.post('/people', person).then(function(response) {
      // console.log('Create Method', response);
      callback(response.data);
    });
  }

  // create user
  factory.createPoll = function(currentUser, poll, callback) {
    console.log('createPoll in PersonFactory currentUser: '  + currentUser);
    console.log('createPoll in PersonFactory question: '  + poll.question);


    $http.post('/poll', {"user":currentUser, "poll": poll}).then(function(response) {
      callback(response.data);
    });
  }

  factory.delete = function(person, callback) {
    $http.delete('/people/'+person._id).then(function(response) {
      callback();
    });
  }
  factory.update = function(person, callback) {
    $http.post('/edit/people', person).then(function(response) {
      console.log('Factory update',person);
      callback();
    })
  }

  return factory;
})