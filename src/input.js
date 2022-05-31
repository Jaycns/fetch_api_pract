import React, { useState, useRef } from "react";
import "./App.css";

function Input({isClick}) {
  const [number, setNumber] = useState(null);
  const [num2, setNum2] = useState(0);
  let typer = useRef("");
  function addComa(e) {
    if (Number(number)+ 1) {
      let newNumber = e.target.value;
      let val = Number(newNumber);
      let newVal = newNumber.toString().replace(/,/gi, "");
      let newVal2 = newVal.split(/(?=(?:\d{3})+$)/).join(",");
      setNumber(newVal2);
      }
    else {
        setNumber('');
      }
  }

  return (
      <div className="inbox">
          <h1>{`${isClick? 'Dark': 'Light'} Theme`}</h1>
          <input
              className="form-input"
        type="number"
        inputMode="numeric"
              ref={ typer }
              pattern="[0-9]+"
              //onInput={number.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')}
        onFocus={() => (typer.current.type = "text")}
        onChange={addComa}
        value={number}
        placeholder="Amount"
          ></input>
    
    </div>
  );
}

export default Input;
