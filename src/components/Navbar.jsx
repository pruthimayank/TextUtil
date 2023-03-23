import React, { useState } from 'react';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-${props.mode} bg-${props.mode} border-bottom border-dark-subtle rounded-bottom-4`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TextUtil</a>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" style={{ backgroundColor: "white" }} onClick={props.tLT} />
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" style={{ backgroundColor: "black" }} onClick={props.tDT} />
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" style={{ backgroundColor: "red" }} onClick={props.tRT} />
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" style={{ backgroundColor: "blue" }} onClick={props.tBT} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}