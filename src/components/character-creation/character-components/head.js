import React from 'react';
import Eyes from './eyes'
import Hair from './hair'
import Mouth from './mouth';

function Head(props) {

return (
        <div style={{ height: '70%', backgroundColor:props.skinColor, width:'100%', borderRadius:'30%'}}>
            <Hair
                hairColor={props.hairColor}
                hairLength={props.hairLength}
                hairType={props.hairType}
            />
            <Eyes
                eyes={props.eyes}
                eyeColor={props.eyeColor}
            />
            <Mouth
                mouth={props.mouth}
            />
        </div>
    );
}

export default Head;

