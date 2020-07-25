import React from 'react';

function AttributeSelection(props) {


    return (
        <div style={{position:'absolute', width:'15vw', height:'99vh', border:'0.5vh gray solid', left:'0%'}}>
            {props.attributes.map((id, index) => (
                <div key={id} onClick={()=>{props.attributeSelect(props.attributes[index])}} style={{height:'13.9vh', width:'100%', lineHeight:'13.9vh', border:'1px white solid', backgroundColor:'gray', color:'white'}}>{props.attributes[index]}</div>
            ))}
        </div>
    );
}

export default AttributeSelection;

