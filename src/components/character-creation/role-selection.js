import React from 'react';

function TypeSelection(props) {


    return (
        <>
            <div style={{width:'20vw', height:'25vw', backgroundColor:'white', position:'absolute', top:'33%', left:props.left}}>
                <h3>{props.text}</h3>
            </div>
        </>
    );
}

export default TypeSelection;

