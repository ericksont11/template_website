import React from 'react';

function Hair(props) {
    let width, height, marginLeft, borderRadius, p, divisor, marginTop, compare, hairWidth, hairHeight
    let n = 7


    switch(props.hairLength) {
        case 'short':
            width=30
            n=3
            p=6
            divisor=1
            marginTop=10
            compare=3
            hairWidth='10%'
            hairHeight='10%'
            break;
        case 'medium':
            width=50
            n=5
            p=13
            divisor=3
            marginTop=15
            compare=9
            hairWidth='10%'
            hairHeight='10%'
            break;
        case 'long':
            width=70
            n=7
            p=26
            divisor=6
            marginTop=25
            compare=p
            hairWidth='10%'
            hairHeight='10%'
            break;
        case 'bald':
            width=0
            n=0
            p=0
            divisor=0
            marginTop=0
            compare=0
            break;
        default:
            width=30
            n=3
            p=6
            divisor=1
            marginTop=10
            compare=3
            break;
    }
    switch(props.hairType) {
        case 'curly':
            break;
        case 'straight':
            width=-60
            n=1
            compare=0
            hairWidth='80%'
            hairHeight='10%'
            borderRadius='90% 90% 0% 0%'
            if(props.hairLength !== 'short'){
                hairWidth='100%'
                width=-80
            }
            break;
        default:
            width=-60
            n=1
            compare=0
            hairWidth='80%'
            hairHeight='10%'
            borderRadius='50% 50% 0% 0%'
            break;
    }
    let num = 1

    return (
        <>
        {[...Array(p)].map((e, x) => {
            if(x%divisor === 0 && x < compare)
                num++
                return [...Array(n+2*(num))].map((e, i) => <div key={i} className='hair' style={{ position:'absolute', zIndex:'-1', marginLeft:''+(width/2-10*(i+1-(num)))+'%', width:hairWidth, backgroundColor:props.hairColor, height:hairHeight, borderRadius, marginTop:''-marginTop+5*x+'%', display:'inline-block'}}></div>)
        }
        )}
        </>
    );
}

export default Hair;

