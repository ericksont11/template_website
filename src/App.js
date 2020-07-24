import React from 'react';
import logo from './logo.svg';
import Card from './components/card'
import CharacterController from './components/character-controller'
import CharacterStats from './utils/character-constructor'

function App() {
  const player = new CharacterStats('Kelsey', 'Mage', 1, 1);

  return (
    <CharacterController
      name={"Kelsey"}
      class={"Mage"}
      player = {player}
    />
  );
}

export default App;
