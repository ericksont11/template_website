import React from 'react';

function Eyes(props) {
    let leftEyeTop, rightEyeTop, leftEyeLeft, rightEyeLeft

    switch(props.eyes) {
        case 'basic':
            leftEyeTop='25%'
            rightEyeTop='25%'
            leftEyeLeft='25%'
            rightEyeLeft='25%'
            break;
        case 'wild':
            leftEyeTop='0%'
            rightEyeTop='50%'
            leftEyeLeft='0%'
            rightEyeLeft='50%'
            break;
        case 'rolling':
            leftEyeTop='0%'
            rightEyeTop='0%'
            leftEyeLeft='0%'
            rightEyeLeft='0%'
            break;
        case 'fish':
            leftEyeTop='50%'
            rightEyeTop='50%'
            leftEyeLeft='0%'
            rightEyeLeft='50%'
            break;
        default:
            leftEyeTop='25%'
            rightEyeTop='25%'
            leftEyeLeft='25%'
            rightEyeLeft='25%'
            break;
      }

    return (
        <>
            <div style={{ marginLeft:'15%', marginTop:'20%', width: '30%', backgroundColor:'white', height:'30%', float:'left', borderRadius:'25%'}}>
                <div style={{width:'50%',height:'50%', marginTop:leftEyeTop, marginLeft:leftEyeLeft, backgroundColor:props.eyeColor, borderRadius:'25%'}}>
                    
                </div>
            </div>
            <div style={{  marginLeft:'10%', marginTop:'20%', width: '30%', backgroundColor:'white', height:'30%', float:'left', borderRadius:'25%'}}>
                <div style={{width:'50%',height:'50%', marginTop:rightEyeTop, marginLeft:rightEyeLeft, backgroundColor:props.eyeColor, borderRadius:'25%'}}>
                    
                </div>
            </div>
        </>
    );
}

export default Eyes;

