import React, {useState} from "react";
import "./App.css";

function Input({isClick}) {
  const [number, setNumber] = useState('');

  function addComa (e) {
     let val = e.target.value.replace(/,/g, "");
    if (!isNaN(Number(val))) {
       let newVal = val.split(/(?=(?:\d{3})+$)/).join(",");
      setNumber(newVal);
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
        type="text"
        onChange={addComa}
        value={number}
        placeholder="Movies"
      
          ></input>
    </div>
  );
}

export default Input;
