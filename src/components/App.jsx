import React, { useState } from 'react';
import Navbar from "./Navbar";
import About from "./About";

export default function App() {
  // useStates
  const [text, setText] = useState("");
  const [mode, setMode] = useState("light");

  // theme functions
  const toggleLightTheme = () => {
    if (mode == "light") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    else if (mode == "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    else if (mode == "danger") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  const toggleDarkTheme = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#181818";
      document.body.style.color = "white";
    }
    else if (mode == "dark") {
      setMode("dark");
      document.body.style.backgroundColor = "#181818";
      document.body.style.color = "white";
    }
    else if (mode == "danger") {
      setMode("dark");
      document.body.style.backgroundColor = "#181818";
      document.body.style.color = "white";
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "#181818";
      document.body.style.color = "white";
    }
  }
  const toggleRedTheme = () => {
    if (mode == "light") {
      setMode("danger");
      document.body.style.backgroundColor = "#CA000C";
      document.body.style.color = "white";
    }
    else if (mode == "dark") {
      setMode("danger");
      document.body.style.backgroundColor = "#CA000C";
      document.body.style.color = "white";
    }
    else if (mode == "danger") {
      setMode("danger");
      document.body.style.backgroundColor = "#CA000C";
      document.body.style.color = "white";
    }
    else {
      setMode("danger");
      document.body.style.backgroundColor = "#CA000C";
      document.body.style.color = "white";
    }
  }
  const toggleBlueTheme = () => {
    if (mode == "light") {
      setMode("primary");
      document.body.style.backgroundColor = "#00008B";
      document.body.style.color = "white";
    }
    else if (mode == "dark") {
      setMode("primary");
      document.body.style.backgroundColor = "#00008B";
      document.body.style.color = "white";
    }
    else if (mode == "danger") {
      setMode("primary");
      document.body.style.backgroundColor = "#00008B";
      document.body.style.color = "white";
    }
    else {
      setMode("primary");
      document.body.style.backgroundColor = "#00008B";
      document.body.style.color = "white";
    }
  }

  // text functions
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const refreshToggle = () => {
    setText("");
  }
  const uppercaseToggle = () => {
    setText(text.toUpperCase());
  }
  const lowercaseToggle = () => {
    setText(text.toLowerCase());
  }
  const copyToggle = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection();
  }
  const extraSpaceToggle = () => {
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const wordCount = (txt) => {
    if (txt == "") return 0;
    else return txt.split(/\s+/).length;
  }

  // main
  return (
    <div>
      <Navbar mode={mode} tLT={toggleLightTheme} tDT={toggleDarkTheme} tRT={toggleRedTheme} tBT={toggleBlueTheme} />
      <br />
      <div className="mx-3">
        <h1>Enter text below : </h1>
        <textarea className="form-control border-dark mt-2 mb-2" value={text} id="myBox" rows={8} onChange={handleOnChange}></textarea>
        <button className={`btn btn-outline-${mode == "light" ? "dark" : "light"} mt-1 me-1 border`} onClick={refreshToggle}>Refresh</button>
        <button className={`btn btn-outline-${mode == "light" ? "dark" : "light"} mt-1 me-1 border`} onClick={uppercaseToggle}>UpperCase</button>
        <button className={`btn btn-outline-${mode == "light" ? "dark" : "light"} mt-1 me-1 border`} onClick={lowercaseToggle}>LowerCase</button>
        <button className={`btn btn-outline-${mode == "light" ? "dark" : "light"} mt-1 me-1 border`} onClick={copyToggle}>Copy Text</button>
        <button className={`btn btn-outline-${mode == "light" ? "dark" : "light"} mt-1 me-1 border`} onClick={extraSpaceToggle}>Remove Extra Spaces</button>
      </div>
      <br />
      <div className="m-3">
        <h1>Your Text Summary : </h1>
        <p>
          -Words: {wordCount(text)}<br /> 
          -Characters: {text.length}<br /> 
          -Read time: {(0.008 * wordCount(text)).toPrecision(4)} wpm
        </p>
      </div>
      <br />
    </div>
  )
}
