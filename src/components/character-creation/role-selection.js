import React from 'react';
import { Link } from "react-router-dom";

function TypeSelection(props) {


    return (
        <>
            <Link  to='/character'>
                <div style={{width:'20vw', height:'25vw', backgroundColor:'white', position:'absolute', top:'33%', left:props.left}}>
                    <h3>{props.text}</h3>
                </div>
            </Link>
        </>

    );
}

export default TypeSelection;

