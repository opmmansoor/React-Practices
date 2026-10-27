import { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);
    const [min, setMin] = useState(0);
 
   return (
     <div>
       <div>
 {/* Counte App */}
         <button onClick={() => setCount ((count) => count + 1)}
                 style={{width:"100px", height: "40px", backgroundColor: "greenyellow", margin:"20px"}}>
           Plus {count}
         </button>
 
         <button onClick={() => setCount ((count) => count = 0) }
                 style={{width:"100px", height: "40px", backgroundColor: "green", margin:"20px"}}>
           Reset {count}
         </button>
 
         <button onClick={() => setMin ((min) => min - 1)}
                 style={{width:"100px", height: "40px", backgroundColor: "royalblue", margin:"20px"}}>
           Minus {min}
         </button>

         <button onClick={() => setMin ((min) => min = 0) }
                 style={{width:"100px", height: "40px", backgroundColor: "blue", margin:"20px"}}>
           Reset {min}
         </button>
       </div>
 
     </div>
  )
}

export default Counter
