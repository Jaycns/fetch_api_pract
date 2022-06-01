import React from 'react'
import { BsMouse } from "react-icons/bs";

function Scroll() {
  return (
    <div>
      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>
    </div>
  );
}

export default Scroll