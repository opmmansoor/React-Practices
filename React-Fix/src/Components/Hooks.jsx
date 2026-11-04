import React, { useEffect, useRef, useState } from 'react'




function Hooks() {
//use State()
  const [name, setName] = useState("Mansoor");

//useEffect
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count: ${count}`);
  },[count]);


//useRef
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus()
  }
     
  return (
    <>
    <div>
      use State()
      <h1> {name}</h1>
      <button onClick={() => setName("Muhammed")}>
        Change Name
      </button>
    </div>

    <div>
      <h1></h1>
    </div>
    <div>
      useEffect();
      <button onClick={() => setCount(count + 1)}>
        Count: {count }
      </button>
    </div>

    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
    </>
  )
}

export default Hooks
