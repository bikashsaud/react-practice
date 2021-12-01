import React from 'react';

const headingPage = {
  paddingLeft:'11rem'
}

const SlotM = (props)=>{
   
    let x = props.x;
    let y = props.y;
    let z = props.z;
  
    if(x === y && y=== z)
    {
      return (
        <>
          <h1 style={{paddingLeft:'16rem'}}>
              {x} {y} {z}
          </h1>
          <h1 style={headingPage}>This is Matching </h1>
        <hr />
        </>
      );
    }
    else{
      return (
        <>
          <h1 style={{paddingLeft:'16rem'}}>
              {x} {y} {z}
          </h1>
          <h1 style={headingPage}>This is not Matching </h1>
          <hr />
        </>
      );
    }
  }

  export default SlotM;
