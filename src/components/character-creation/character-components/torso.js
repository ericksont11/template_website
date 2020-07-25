import React from 'react';

function Torso(props) {

return (
        <div style={{ height: '20%', backgroundColor:'#2F4F4F', width:'60%', marginLeft:'20%', borderRadius:'10% 10% 0% 0%'}}>
            <div style={{width:'16.25%', height:'90%', paddingTop:'15%', float:'left'}}>
                <div style={{width:'100%', borderRight:'.1vw gray solid', height:'75%'}}>
                    <div style={{ width:'100%', backgroundColor:'#2F4F4F', height:'75%'}}>

                    </div>
                    <div style={{ width:'100%', backgroundColor:props.skinColor, height:'25%'}}>

                    </div>
                </div>
            </div>
            <div style={{width:'16.25%', height:'90%', paddingTop:'15%', float:'right', overflow:'hidden'}}>
                <div style={{width:'100%', borderLeft:'.1vw gray solid', height:'75%'}}>
                    <div style={{ width:'100%', backgroundColor:'#2F4F4F', height:'75%'}}>

                    </div>
                    <div style={{ width:'100%', backgroundColor:props.skinColor, height:'25%'}}>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Torso;

