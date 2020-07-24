import React, { Component } from "react";
import CharacterStats from '../utils/character-constructor'
import Character from './character'
import movement from '../utils/character-movements'

const rogue = new CharacterStats("Kelsey", "Wizard");

class CharacterController extends Component {

    state = {
        x: 10,
        y: 10
    }

    componentDidMount() {
        document.addEventListener("keydown", (e)=> {
            let change =  movement([this.state.x,this.state.y],e)
            this.setState({
                x: this.state.x + change[0],
                y: this.state.y + change[1]
            })
        })
    }

    render() {
        return (
            <>
                <Character
                    x = {this.state.x}
                    y = {this.state.y}
                />
            </>
        );
    }
}

export default CharacterController;