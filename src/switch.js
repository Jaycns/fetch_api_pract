import React from "react";

function Switch({handleClick, isClick}) {
  
  return (
      <div className="switch">
          
      <label>
        <input
          type="checkbox"
          onClick={handleClick}
          value={true}
          defaultChecked={isClick}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Switch;
