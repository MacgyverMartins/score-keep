import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {
  const players = [{
    _id: '1',
    name: 'Mac',
    score: 99
  },{
    _id: '2',
    name: 'Leticia',
    score: 97
  },{
    _id: '3',
    name: 'Marcia',
    score: 98
  }];

  const renderPlayers = function(playersList) {
    return playersList.map(function(player) {
      return <p key={player._id}>{player.name}</p>;
    });
  };

  let jxs = (
    <div>
      <p>This is from main.js</p>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jxs, document.getElementById('app'));
});
