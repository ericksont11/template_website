import React, { Component } from "react";
import Character from './character-display'
import movement from '../utils/character-movements'
import '../index.css'
class CharacterController extends Component {

    state = {
        x: 1,
        y: 94,
        horizontalSpeed: this.props.player.horizontalSpeed,
        verticalSpeed: this.props.player.verticalSpeed,
        runBoosted: false,
        jumpBoosted: false,
        page:1
    }


    componentDidMount() {
        setTimeout(function () {
            console.log('scroll')
            window.scrollTo({top:0, left: 0})
        },200);
        document.addEventListener("keydown", (e)=> {
            let change =  movement([this.state.x,this.state.y],e)
            let newPosition = this.state.x + change[0] * this.state.horizontalSpeed
            let x, y = 0
            let width = window.innerWidth/100;

            if (newPosition > 1 && newPosition < 188) {
                console.log(newPosition)
                if (newPosition > 94 && change[0] > 0 && this.state.page === 1){
                    setTimeout(function () {
                        console.log('scroll')
                        window.scrollTo({top:0, left: (width * newPosition - width * 1)})
                    },2);
                    this.setState({ page: 2})
                } else if (newPosition < 95 && change[0] < 0 && this.state.page === 2){
                    setTimeout(function () {
                        console.log('scroll')
                        window.scrollTo({top:0, left: 0})
                    },2);
                    this.setState({ page: 1})
                }
                x = newPosition
            } else if (newPosition >= 188) {
                console.log(newPosition)
                x= 188
            } else {
                x=1
            } 
            if (this.state.y + change[1] * this.state.verticalSpeed > 0 && this.state.y + change[1] * this.state.verticalSpeed < 94) {
                y = this.state.y + change[1] * this.state.verticalSpeed
            } else if (this.state.y + change[1] * this.state.verticalSpeed >= 94) {
                y= 94
            } else {
                y=1
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
                if(this.state.x > 75 && this.state.x < 85 && this.state.y > 75 && this.state.y < 85 && this.state.jumpBoosted === false) {
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
        const { data } = this.props.location
        console.log(data)
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