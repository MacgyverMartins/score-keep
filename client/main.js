import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from './../imports/api/players';


Meteor.startup(function() {

  Tracker.autorun(function() {
    const players = Players.find().fetch();

    const renderPlayers = function(playersList) {
      return playersList.map(function(player) {
        return <p key={player._id}>{player.name} as {player.score} points</p>;
      });
    };

    let jxs = (
      <div>
      <p>This is from main.js</p>
      {renderPlayers(players)}
      </div>
    );
    ReactDOM.render(jxs, document.getElementById('app'));
  })
});
