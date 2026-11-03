import React, {useState} from "react";
import "../App.css"


function GridLigth () {
    const [lights, setLights] = useState([]);

  const handleClick = (index) => {
    if (lights.includes(index)) {
      setLights(lights.filter((item) => item !== index));
    } else {
      setLights([...lights, index]);
    }
  };

  return (
    <div style={{textAlign:"center", marginTop: "50px" }}>
      <h2>Grid Light System</h2>

      <div style={{display:"grid", gridTemplateColumns: "repeat(3, 100px)", gap: "15px", justifyContent: "center"}}>
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className={lights.includes(index) ? "box active" : "box"}
            onClick={() => handleClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridLigth