/**
 * Created by imalonzo on 10/19/16.
 */

app.factory('PersonFactory', function($http) {
  var factory = {};
  // var people  = [{name: 'asdf', age: 123}, {name: 'fdsa', age: 321}];

  factory.index = function(callback) {
    $http.get('/people').then(function(response) {
      callback(response.data);
    })
  }

  factory.create = function(person, callback) {
    console.log('new_person firstName: '  + person.firstName);
    console.log('new_person lastName: '  + person.lastName);
    console.log('new_person birthDay: '  + person.birthDay);

    // Go to server/config/routes.js
    $http.post('/people', person).then(function(response) {
      // console.log('Create Method', response);
      console.log("@@@@ response.data :" + response.data);
      callback(response.data);
    })

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