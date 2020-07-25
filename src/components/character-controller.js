import React, { Component } from "react";
// import Character from './character-display'
import Character from './character-creation/character'
import movement from '../utils/character-movements'
import { withRouter } from 'react-router-dom';
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
            window.scrollTo({top:0, left: 0})
            
        },200);
        const width = (window.innerHeight / 100*3.5)/(window.innerWidth/100)
        console.log(width)
        document.addEventListener("keydown", (e)=> {
            let change =  movement([this.state.x,this.state.y],e)
            let newPosition = this.state.x + change[0] * this.state.horizontalSpeed
            let x, y = 0
            if (newPosition > 1 && newPosition < 188) {
                if (newPosition > 94 && change[0] > 0 && this.state.page === 1){
                    setTimeout(function () {
                        window.scrollTo({top:0, left: (width * newPosition - width * 1)})
                    },2);
                    this.setState({ page: 2})
                } else if (newPosition < 95 && change[0] < 0 && this.state.page === 2){
                    setTimeout(function () {
                        window.scrollTo({top:0, left: 0})
                    },2);
                    this.setState({ page: 1})
                }
                x = newPosition
            } else if (newPosition >= 188) {
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
                if(this.state.x > 50-width && this.state.x < 50+width && this.state.y > 45 && this.state.y < 55 && this.state.runBoosted === false) {
                    console.log('run boost acquired')
                    document.getElementById('runBoost').style.display = 'none'
                    this.adjustSpeed('horizontal')
                    this.setState({ runBoosted: true})
                }
                if(this.state.x > 80-width && this.state.x < 80+width && this.state.y > 89 && this.state.y < 99 && this.state.jumpBoosted === false) {
                    console.log(this.state.x)
                    console.log(width)
                    console.log(80-width)
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
                    eyes={this.props.location.state.eyes}
                    eyeColor={this.props.location.state.eyeColor}
                    skinColor={this.props.location.state.skinColor}
                    hairColor={this.props.location.state.hairColor}
                    hairLength={this.props.location.state.hairLength}
                    hairType={this.props.location.state.hairType}
                    mouth={this.props.location.state.mouth}
                    x={this.state.x}
                    y={this.state.y}
                    height={'5vh'}
                    width={'3.75vh'}
                />
                <div id='runBoost' style={{height:'5%', width:'5%', position:'absolute',top:'50%', left:'50%', backgroundColor:'red'}}></div>
                <div id='jumpBoost' style={{height:'5%', width:'5%', position:'absolute',top:'94%', left:'80%', backgroundColor:'green'}}></div>
                <div id='project1' style={{height:'2%', width:'15%', position:'absolute',top:'60%', left:'60%', backgroundColor:'purple', color:'white'}}>Project 1</div>
            </>
        );
    }
}

export default withRouter(CharacterController)