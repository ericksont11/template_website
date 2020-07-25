import React from 'react';
import Character from '../components/character-creation/character';
import ColorSelection from '../components/character-creation/color-selection';
import AttributeSelection from '../components/character-creation/attribute-selection';
import TypeSelection from '../components/character-creation/type-selection';
import PreMade from '../data/premade_characters.json'
import { Link, useLocation } from "react-router-dom";


function CharacterCreation(props) {
    const location = useLocation();
    const [eyes, setEyes] = React.useState('basic');
    const [skinColor, setSkinColor] = React.useState('#a1665e')
    const [hairColor, setHairColor] = React.useState('black')
    const [eyeColor, setEyeColor] = React.useState('black')
    const [attribute, setAttribute] = React.useState('Hair Color')
    const [hairLength, setHairLength] = React.useState('short')
    const [hairType, setHairType] = React.useState('straight')
    const [mouth, setMouth] = React.useState('neutral')

    const attributeSelect = (selected) => {
        setAttribute(selected)
    }

    var dict = {"one" : [15, 4.5],
    "two" : [34, 3.3],
    "three" : [67, 5.0],
    "four" : [32, 4.1]};

    var dictstring = JSON.stringify(dict);

    let selector

    switch(attribute) {
        case 'Hair Color':
            selector = <ColorSelection
                            colors={['#4f1a00', '#9a3300', '#241c11', 'green', 'blue', 'orange', 'red', 'purple']}
                            selectColor={(selected)=>{setHairColor(selected)}}
                        />
            break;
        case 'Skin Color':
            selector = <ColorSelection
                            colors={['#ecbcb4', '#c58c85', '#d1a3a4', '#a1665e', '#503335', '#592f2a', 'green', 'blue', 'red', 'purple']}
                            selectColor={(selected)=>{setSkinColor(selected)}}
                        />
            break;
        case 'Eye Color':
            selector = <ColorSelection
                            colors={['black','#634e34', 'blue', '#2e536f', '#3d671d', '#1c7847', '#497665', 'orange', 'red', 'purple']}
                            selectColor={(selected)=>{setEyeColor(selected)}}
                        />
            break;
        case 'Eye Position':
            selector = <TypeSelection
                            set={selected=>{setEyes(selected)}}
                            type={['basic', 'rolling', 'wild', 'fish']}
                       />
            break;
        case 'Hair Length':
            selector = <TypeSelection
                            set={selected=>{setHairLength(selected)}}
                            type={['short', 'medium', 'long', 'bald']}
                       />
            break;
        case 'Hair Type':
            selector = <TypeSelection
                            set={selected=>{setHairType(selected)}}
                            type={['curly', 'straight']}
                       />
            break;
        case 'Mouth':
            selector = <TypeSelection
                            set={selected=>{setMouth(selected)}}
                            type={['smile', 'frown', 'neutral']}
                       />
            break;
        default:
            selector = <ColorSelection
                            colors={['#ecbcb4', '#c58c85', '#d1a3a4', '#a1665e', '#503335', '#592f2a', 'green', 'blue', 'orange', 'red', 'purple']}
                            selectColor={(selected)=>{setHairColor(selected)}}
                        />
            break;
    }

    const setPreMade = (num) => {
        setSkinColor(PreMade[num].skinColor)
        setEyeColor(PreMade[num].eyeColor)
        setHairLength(PreMade[num].hairLength)
        setHairColor(PreMade[num].hairColor)
        setEyes(PreMade[num].eyePosition)
        setMouth(PreMade[num].mouth)
        setHairType(PreMade[num].hairType)
    }


    return (
        <div style={{backgroundColor:'#86c5da', width:'100vw', height:'100vh'}}>

            <div style={{position:'fixed', left:'57.5%', transform:'translateX(-50%)',top:'10%', fontSize:'10vh', width:'auto', color:'white'}}>    {attribute}
            </div>

            <AttributeSelection
                attributeSelect={attributeSelect}
                attributes={['Hair Color', 'Hair Type', 'Hair Length', 'Eye Color','Eye Position','Skin Color', 'Mouth']}
            />

            <Character
                eyes={eyes}
                eyeColor={eyeColor}
                skinColor={skinColor}
                hairColor={hairColor}
                hairLength={hairLength}
                hairType={hairType}
                mouth={mouth}
                transform = {'translate(-50%, -50%)'}
                x={57.5}
                y={50}
                height={'40vh'}
                width={'30vh'}
            />

            {selector}

            

            <button onClick={()=>{setPreMade(0)}}>Shayne</button>
            <button onClick={()=>{setPreMade(1)}}>Kels</button>
            <button onClick={()=>{setPreMade(2)}}>Tom</button>
            <button onClick={()=>{setPreMade(3)}}>Erin</button>
            <Link
                to={{
                    pathname: "/game",
                    state: {
                        hairColor: hairColor,
                        eyeColor: eyeColor,
                        hairLength: hairLength,
                        eyes: eyes,
                        skinColor: skinColor,
                        hairType: hairType,
                        mouth: mouth
                    }
                }}
            >Home</Link>
            
        </div>
    );
}

export default CharacterCreation;
