import React from 'react';
import { Link } from "react-router-dom";
import styles from '../css-animations/text.module.css'
import './assets/pages.css'
import RoleSelection from '../components/character-creation/role-selection'

function Home(props) {

    const style = {
        height:'100vh', 
        width:'100vw', 
        backgroundColor:'black', 
        color:'white'
    }

    return (
        <>
            <header style={style}>
                <h1>Erickson Development</h1> 
                <h2 className={`${styles['fade-in']}`} id='values'>Choose your role</h2>
            </header>
            <RoleSelection
                left='10%'
                text='Customer'
            />
            <RoleSelection
                left='40%'
                text='Developer'
            />
            <RoleSelection
                left='70%'
                text='HR'
            />
        </>
    );
}

export default Home;
