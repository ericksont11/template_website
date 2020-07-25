import React from 'react';
import Head from './character-components/head'
import Torso from './character-components/torso'
import Legs from './character-components/legs'
import Shoes from './character-components/shoes'

function Character(props) {

return (
        <div id='custom-char' style={{ position:'absolute', height:props.height, width:props.width, transform: props.transform, left: props.x+'%', top: props.y+'%'}}>
            <Head
                eyes={props.eyes}
                eyeColor={props.eyeColor}
                skinColor={props.skinColor}
                hairColor={props.hairColor}
                hairLength={props.hairLength}
                hairType={props.hairType}
                mouth={props.mouth}
            />
            <Torso
                skinColor={props.skinColor}
            />
            <Legs/>
            <Shoes/>
        </div>
    );
}

export default Character;

