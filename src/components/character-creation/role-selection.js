import React from 'react';
import { Link } from "react-router-dom";

function TypeSelection(props) {

    return (
        <>
            <Link  to='/character' className={props.className}>
                <div style={{width:'20vw', height:'25vw', backgroundColor:'white', lineHeight:'25vw', position:'absolute', top:'33%', left:props.left}}>
                    {props.text}
                </div>
            </Link>
        </>

    );
}

export default TypeSelection;

