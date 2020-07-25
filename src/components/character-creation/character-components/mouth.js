import React from 'react';

function Mouth(props) {
    let borderBottom, borderTop, radius, marginTop

    switch(props.mouth) {
        case 'smile':
            borderBottom='solid 5px #000'
            radius = '300%'
            marginTop='50%'
            break;
        case 'frown':
            borderTop='solid 5px #000'
            radius = '300%'
            marginTop='55%'
            break;
        case 'neutral':
            borderBottom= 'solid 5px #000'
            radius = '0%'
            marginTop='50%'
            break;
        default:
            borderBottom= 'solid 5px #000'
            radius = '0%'
            marginTop='50%'
            break;
    }

    return (
        <>
            <div style={{ position:'absolute', marginLeft:'30%', marginTop, width: '40%', height:'3vh', borderBottom, borderTop, borderRadius:radius}}>
            </div>
        </>
    );
}

export default Mouth;
