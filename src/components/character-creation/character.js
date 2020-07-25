import React from 'react';
import Head from './character-components/head'
import Torso from './character-components/torso'
import Legs from './character-components/legs'
import Shoes from './character-components/shoes'

function Character(props) {

return (
        <div style={{ position:'absolute', height: '40vh', width:'30vh', left:'57.5%', transform:'translate(-50%, -50%)', top:'50%'}}>
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

