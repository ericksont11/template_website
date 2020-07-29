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
        page:1,
        jumping: false
    }


    componentDidMount() {
        setTimeout(function () {
            window.scrollTo({top:0, left: 0})
            
        },200);
        let keysPressed = {};

        document.addEventListener('keydown', (event) => {
            keysPressed[event.key] = true;
        });
        document.addEventListener('keyup', (event) => {
            delete keysPressed[event.key];
         });
        const width = (window.innerHeight / 100*3.5)/(window.innerWidth/100)
        document.addEventListener("keydown", (e)=> {
            let change =  movement([this.state.x,this.state.y],e, keysPressed)
            let newPosition = this.state.x + change[0] * this.state.horizontalSpeed
            let x, y = 0
            if (this.state.jumping === false){
                console.log(this.state.x)
                if (newPosition > 1 && newPosition < 188) {
                    if (newPosition > 94 && change[0] > 0 && this.state.page === 1){
                        setTimeout(function () {
                            window.scrollTo({top:0, left: (window.innerWidth * .93 - width)})
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
                this.setState({x})
            }
            if (this.state.y + change[1] * this.state.verticalSpeed > 0 && this.state.y + change[1] * this.state.verticalSpeed < 94
                 && this.state.jumping === false) {
                this.setState({jumping: true})
                console.log(this.state.x)
                let timer = 0
                let speed = this.state.verticalSpeed
                let newPosition = this.state.x + change[0] * this.state.horizontalSpeed
                x=newPosition
                for(let i=1; i < 44; i++){
                    timer = timer + 15
                    if (i < 22) {
                        setTimeout(()=>{
                            x += + i * .005
                            speed = speed/2
                            let y = this.state.y - speed
                            this.setState({
                                x,y
                            })
                        },timer)
                    } else if (i < 43){
                        setTimeout(()=>{
                            x += i * .005
                            let y = this.state.y + speed
                            this.setState({
                                x,y
                            })
                            speed = speed * 2
                        },timer)
                    } else {
                        setTimeout(()=>{
                            this.setState({
                                jumping: false,
                            })
                        }, timer)
                    }
                }
            } else if (this.state.y + change[1] * this.state.verticalSpeed >= 94) {
                y= 94
            } else {
                y=1
            } 

            if(this.state.x > 50-width && this.state.x < 50+width && this.state.y > 89 && this.state.y < 99 && this.state.runBoosted === false) {
                console.log('run boost acquired')
                document.getElementById('runBoost').style.display = 'none'
                this.adjustSpeed('horizontal')
                this.setState({ runBoosted: true})
            }
            if(this.state.x > 80-width && this.state.x < 80+width && this.state.y > 89 && this.state.y < 99 && this.state.jumpBoosted === false) {
                console.log('jump boost acquired')
                document.getElementById('jumpBoost').style.display = 'none'
                this.adjustSpeed('vertical')
                this.setState({ jumpBoosted: true})
            }

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
        let eyes, eyeColor, skinColor, hairType, hairLength, hairColor, mouth
        if(this.props.location.state) {
            eyes = this.props.location.state.eyes 
            eyeColor = this.props.location.state.eyeColor
            skinColor = this.props.location.state.skinColor
            hairColor = this.props.location.state.hairColor
            hairLength = this.props.location.state.hairLength
            hairType = this.props.location.state.hairType
            mouth = this.props.location.state.mouth
        }
        return (
            <>
                <Character
                    eyes={eyes || 'basic'}
                    eyeColor={eyeColor || 'brown'}
                    skinColor={skinColor || '#ecbcb4'}
                    hairColor={hairColor || 'orange'}
                    hairLength={hairLength || 'long'}
                    hairType={hairType || 'curly'}
                    mouth={mouth || 'smile'}
                    x={this.state.x}
                    y={this.state.y}
                    height={'5vh'}
                    width={'3.75vh'}
                />
                <div id='runBoost' style={{height:'5%', width:'5%', position:'absolute',top:'94%', left:'50%', backgroundColor:'red'}}></div>
                <div id='jumpBoost' style={{height:'5%', width:'5%', position:'absolute',top:'94%', left:'80%', backgroundColor:'green'}}></div>
                <div id='project1' style={{height:'2%', width:'15%', position:'absolute',top:'60%', left:'60%', backgroundColor:'purple', color:'white'}}>Project 1</div>
            </>
        );
    }
}

export default withRouter(CharacterController)