import React, { useState } from 'react'

function Calculator() {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] =useState("");

    const calculate = (operator) => {
        const a = Number(num1);
        const b = Number(num2);

        if (num1 === "" || num2 === "") {
            alert("Please enter Both Numbers")
            return;
        }

        if (operator === "+") {
            setResult(a + b);
        } else if (operator === "-") {
            setResult(a - b);
        } else if (operator === "*") {
            setResult(a * b);
        } else if (operator === "/") {
            if (b === 0) {
                alert ("Cannot divide by Zero")
            } else {
                setResult(a / b);
            }
        }
    }

  return (
    <div>
        <br />
      <h2>Simple Calculator</h2>

      <input type="number"
            onChange={(e) => setNum1(e.target.value)}/>
      <br />
      <input type="number" 
            onChange={(e) => setNum2(e.target.value)}/>
      <br /><br />

      <button onClick={() => calculate("+")}>+</button>{" "}
      <button onClick={() => calculate("-")}>-</button>{" "}
      <button onClick={() => calculate("*")}>*</button>{" "}
      <button onClick={() => calculate("/")}>/</button>

      <h3>Result = { result}</h3>

    </div>
  )
}

export default Calculator
