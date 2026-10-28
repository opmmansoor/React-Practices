import React, { useState } from 'react'

function ShowHideTOggle() {

    const [show,setShow] = useState(false);

  return (
    <div>
        <button onClick={() => setShow(!show)}
                style={{width:"200px", height:"50px", backgroundColor:"black"}}>
            {show ? "Hide Text" : "Show Text"}
        </button>

        {show && <p style={{color:"red", fontSize:"30px"}}>
          Hello! Welcome to React.
          </p>}
      
    </div>
  )
}

export default ShowHideTOggle
