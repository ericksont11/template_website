import React, { Component } from "react";
import Character from './character'
import movement from '../utils/character-movements'
class CharacterController extends Component {

    state = {
        x: 10,
        y: 10,
        horizontalSpeed: this.props.player.horizontalSpeed,
        verticalSpeed: this.props.player.verticalSpeed,
        runBoosted: false,
        jumpBoosted: false
    }


    componentDidMount() {
        document.addEventListener("keydown", (e)=> {
            let change =  movement([this.state.x,this.state.y],e)
            let x, y = 0
            if (this.state.x + change[0] * this.state.horizontalSpeed > 0 && this.state.x + change[0] * this.state.horizontalSpeed < 95) {
                x = this.state.x + change[0] * this.state.horizontalSpeed
            } else if (this.state.x + change[0] * this.state.horizontalSpeed >= 95) {
                x= 95
            } else {
                x=0
            } 
            if (this.state.y + change[1] * this.state.verticalSpeed > 0 && this.state.y + change[1] * this.state.verticalSpeed < 95) {
                y = this.state.y + change[1] * this.state.verticalSpeed
            } else if (this.state.y + change[1] * this.state.verticalSpeed >= 95) {
                y= 95
            } else {
                y=0
            } 
            this.setState({
                x,
                y
            }, ()=>{
                if(this.state.x > 45 && this.state.x < 55 && this.state.y > 45 && this.state.y < 55 && this.state.runBoosted === false) {
                    console.log('run boost acquired')
                    document.getElementById('runBoost').style.display = 'none'
                    this.adjustSpeed('horizontal')
                    this.setState({ runBoosted: true})
                }
                if(this.state.x > 75 && this.state.x < 85 && this.state.y > 55 && this.state.y < 85 && this.state.jumpBoosted === false) {
                    console.log('jump boost acquired')
                    document.getElementById('jumpBoost').style.display = 'none'
                    this.adjustSpeed('vertical')
                    this.setState({ jumpBoosted: true})
                }
            })
        })
    }

    adjustSpeed = (type) => {
        if(type === 'horizontal'){
            this.props.player.adjustHorizontalSpeed()
            this.setState({horizontalSpeed: this.props.player.horizontalSpeed})
        } else {
            this.props.player.adjustVerticalSpeed()
            this.setState({verticalSpeed: this.props.player.verticalSpeed})
        }
        this.props.player.printStats()
    }

    render() {
        return (
            <>
                <Character
                    x = {this.state.x}
                    y = {this.state.y}
                />
                <div id='runBoost' style={{height:'5%', width:'5%', position:'absolute',top:'50%', left:'50%', backgroundColor:'red'}}></div>
                <div id='jumpBoost' style={{height:'5%', width:'5%', position:'absolute',top:'80%', left:'80%', backgroundColor:'green'}}></div>
            </>
        );
    }
}

export default CharacterController;