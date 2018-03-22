import React from 'react';

export default function Sidebar(props) {
    var whiteBar = {
      position: 'fixed',
      width: props.width - 300,
      height: '100vh',
    }
    var contentBar = {
      position: 'fixed',
      marginLeft: props.width - 300,
      width: 300,
      height: '100vh',
      background: 'black',
      zIndex: 100,
    }
    return (
      <div>
        <div style={whiteBar}></div>
        <div style={contentBar}>
          <div style={{position: 'relative', width: 250, top: 25, left: 25, display: 'block'}}>
             <div style={{width: '100%', height: 150, background: 'green'}}></div>
             <br></br>
             <br></br>
             <button onClick={() => props.clickCallback(0)}>Home</button>
             <br></br>
             <br></br>
             <button onClick={() => props.clickCallback(1)}>Menu</button>
             <br></br>
             <br></br>
             <button onClick={() => props.clickCallback(2)}>Location and Contacts</button>
             <br></br>
             <br></br>
             <div style={{color: 'white'}}>
               504 Nelson Street <br></br>
               Coquitlam, BC <br></br>
               V3J 7R4
             </div>
             <br></br>
             <div style={{color: 'white'}}>
               Sunday - Thursday <br></br>
               11:30 AM - 9 PM <br></br>
               Friday, Saturday  <br></br>
               11:30 AM - 10 PM <br></br>
             </div>
             <br></br>
             <div style={{color: 'white'}}>
               (604) 931-0552
             </div>
          </div>
        </div>
      </div>
    )
}
