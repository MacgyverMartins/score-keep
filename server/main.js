import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(function() {
  Players.insert({
    name: 'Mac',
    score: 3
  });

  console.log(Players.find().fetch());
});
