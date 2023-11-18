import React from "react";
import { useState } from "react";
const Calculator = () => {
    //usestate to take input
  const [numberInputs, setNumberInput] = useState({ num1: "", num2: "" });
  //usestate to print error
  const [error,setError] = useState("");
  //useStat to print sucess
  const [sucess,setSucess] = useState("");
  //useState to print output
  const [output,setOutput] = useState("");


 //function to perform Arithmatatic operations
 function Arithmatatic(op)
 {
    if(Number(op) === 1)
    {
        setOutput("Result " + eval(`${numberInputs.num1} + ${numberInputs.num2}`));
    }
    else if(Number(op)===2)
    {
        setOutput("Result " + eval(`${numberInputs.num1} - ${numberInputs.num2}`));
    }
    else if(Number(op) === 3)
    {
        setOutput("Result " + eval(`${numberInputs.num1} * ${numberInputs.num2}`));
    }
    else if(Number(op) === 4)
    {
        setOutput("Result " + eval(`${numberInputs.num1} / ${numberInputs.num2}`));

    }
 }

  //function to perform validation
  function validation(e) {
     
    if(numberInputs.num1 === "" )
    {
        setError("Error");
        setSucess("");
        setOutput("NUM1 cannot be empty");
    }
    else if(numberInputs.num2 === "")
    {
        setError("Error");
        setSucess("");
        setOutput("NUM2 cannot be empty");
        
    }
    else if(!Number(numberInputs.num1) || !Number(numberInputs.num2))
    {
        setSucess("");
        setError("Error");
        setOutput("Invalid Input")
    }
    else {
        setSucess("Sucess");
        setError("");
        setNumberInput({...numberInputs,num1:"",num2:""});
            Arithmatatic(e.target.id);
    }
  }

  return (
    <div className="Calculator">
        <h1 className="Heading">React Calculator</h1>
      <input
        placeholder="NUM1"
        type="text"
        value={numberInputs.num1}
        onInput={(e) => {
          setNumberInput({ ...numberInputs, num1: e.target.value });
        }}
      ></input>
      <input
        placeholder="NUM2"
        type="text"
        value={numberInputs.num2}
        onInput={(e) => {
          setNumberInput({ ...numberInputs, num2: e.target.value });
        }}
      ></input>
      <div className="Buttons">
        <button  id="1" onClick={validation}>+</button>
        <button id="2" onClick={validation}>-</button>
        <button id="3" onClick={validation}>*</button>
        <button id="4" onClick={validation}>/</button>
      </div>
      {
        error &&  <p className="Error">{error}</p>

      }
      {
        sucess && <p className="Sucess">{sucess}</p>
      }
      <p className="Output">{output}</p>
    </div>
  );
};

export default Calculator;
