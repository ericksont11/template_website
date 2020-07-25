import React from 'react';

function Mouth(props) {
    let borderBottom, borderTop, radius, top

    switch(props.mouth) {
        case 'smile':
            borderBottom='solid 5px #000'
            radius = '300%'
            top='50%'
            break;
        case 'frown':
            borderTop='solid 5px #000'
            radius = '300%'
            top='50%'
            break;
        case 'neutral':
            borderBottom= 'solid 5px #000'
            radius = '0%'
            top='50%'
            break;
        default:
            borderBottom= 'solid 5px #000'
            radius = '0%'
            top='50%'
            break;
    }

    return (
        <>
            <div style={{ position:'absolute', marginLeft:'30%', top, width: '40%', height:'1%', borderBottom, borderTop, borderRadius:radius}}>
            </div>
        </>
    );
}

export default Mouth;
