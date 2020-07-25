import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home'
import './App.css';
import CharacterCreation from './pages/character_creation';
import CharacterController from './components/character-controller';
import CharacterStats from './utils/character-constructor'

function App() {
  const player = new CharacterStats('Kelsey', 'Mage', 1, 1);

  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={() => <Home/>}/>
          <Route exact path="/character" component={() => <CharacterCreation/>}/>
          <Route exact path='/game' component={(props) => 
            <CharacterController
              player={player}
              props
            />
          }/>
      </Switch>
    </div>
  );
}

export default App;
