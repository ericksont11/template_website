import React from 'react';

function TypeSelection(props) {


    return (
        <div style={{position:'absolute', width:'auto', height:'9vh', left:'57.5%', transform:'translateX(-50%)', top:'80%'}}>
            {props.type.map((id, index) => (
                <div style={{width:'7vw', color:'white', float:'left', lineHeight:'6vh', backgroundColor:'gray', padding:'1vh', border:'0.5vh white solid'}} onClick={() => props.set(props.type[index])}>{props.type[index].toUpperCase()}</div>
            ))}
        </div>
    );
}

export default TypeSelection;

