import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from './../imports/api/players';


const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return (
      <p key={player._id}>
        {player.name} as {player.score} points.
        <button onClick={() => {
          Players.update(player._id, { $inc: {score: -1} });
        }}>-1</button>
      <button onClick={() => {
        Players.update(player._id, { $inc: {score: 1} });
      }}>+1</button>
    <button onClick={() => Players.remove(player._id)}>X</button>
  </p>
    );
  });
};

const handleSubimit = function(e) {
  let playerName = e.target.playerName.value;
  e.preventDefault();
  Players.insert({
    name: playerName,
    score: 0
  });
}

class TitleBar extends React.Component {
  render() {
    return (
      <div>
        <h1>My app</h1>
      </div>
    )
  }
}

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch();
    let jxs = (
      <div>
        <TitleBar/>
        <p>This is from main.js</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubimit}>
          <input type="text" name="playerName" placehoulder="Player name" />
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jxs, document.getElementById('app'));
  })
});
