import React from 'react';
import '../styles/character.css';

function CharacterDisplay(props) {

    return (
        <>
            <div className='character' style={{position:'absolute', left: props.x+'%', top: props.y+'%'}}>
                {props.speed}
            </div>
        </>
    );
}
export default CharacterDisplay;