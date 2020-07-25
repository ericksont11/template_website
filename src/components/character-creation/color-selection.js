import React from 'react';

function ColorSelection(props) {


    return (
        <div style={{position:'absolute', width:'auto', height:'7vh', left:'57.5%', transform:'translateX(-50%)', top:'80%'}}>
            {props.colors.map((id, index) => (
                <div value={id} onClick={()=>{props.selectColor(props.colors[index])}}style={{width:'6vh', border:'0.5vh white solid', height:'6vh', float:'left', backgroundColor:props.colors[index]}} key={id}></div>
            ))}
        </div>
    );
}

export default ColorSelection;

