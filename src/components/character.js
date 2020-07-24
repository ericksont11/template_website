import React from 'react';
import '../styles/character.css';
import Character from '../utils/character-constructor'

function CharacterDisplay(props) {
    console.log(props)

    return (
        <>
            <div className='character' style={{position:'absolute', left: props.x+'%', top: props.y+'%'}}>
                {props.speed}
            </div>
        </>
    );
}
export default CharacterDisplay;