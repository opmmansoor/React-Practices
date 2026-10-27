import React, { useState } from 'react'

function BoxColor() {

     const [color, setColor] = useState("white")

  return (
    <div>
{/* Box Colour change */}
      <div style={{
        width: "350px", height:"150px", backgroundColor: color, border: "2px solid color", 
        marginBottom: "20px", margin: "20px"
      }}>
        </div>

        <button onClick={() => setColor("red")}
                style={{width:"100px", height:"100px", backgroundColor:"red", margin:"10px"}}>
          RED
        </button>

        <button onClick={() => setColor("blue")}
                style={{width:"100px", height:"100px", backgroundColor:"blue", margin:"10px"}}>
          BLUE
        </button>

        <button onClick={() => setColor("green")}
                style={{width:"100px", height: "100px", backgroundColor: "green",  margin:"10px"}}>
          GREEN
        </button>
      
    </div>
  )
}

export default BoxColor
