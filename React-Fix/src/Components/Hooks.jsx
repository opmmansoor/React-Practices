import React, { createContext, useContext, useEffect, useRef, useState } from 'react'

 const ThemeContest = createContext("ligth");

 function Child() {
  const theme = useContext(ThemeContest);
  return <p>Theme: {theme}</p>
 }


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
    {/* useContext() */}
    <div>
  <ThemeContest.Provider value='dark' >
    <Child />
  </ThemeContest.Provider>
    </div>



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
