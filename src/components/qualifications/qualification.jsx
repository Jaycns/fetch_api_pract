import React from 'react'
import './qualification.css'

export default function Qualification() {
  return (
    <div>
      <span className="quali-text">
        <h1>My Qualifications</h1>
      </span>
      <div className="quali-container">
        <div className="quali">
          <div className="content html">
            <h1>html</h1>
          </div>
        </div>
        <div className="quali">
          <div className="content css">
            <h1>css</h1>
          </div>
        </div>
        <div className="quali">
          <div className="content js">
            <h1>javascript</h1>
          </div>
        </div>
        <div className="quali">
          <div className="content bootstrap">
            <h1>bootstrap</h1>
          </div>
        </div>
        <div className="quali">
          <div className="content react">
            <h1>react</h1>
          </div>
        </div>
        <div className="quali">
          <div className="content nextjs">
            <h1>next</h1>
          </div>
        </div>
        <div className="quali">
          <div className="content node">
            <h1>node</h1>
          </div>
        </div>
        <div className="quali">
          <div className="content canvas">
            <h1>canvas</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
