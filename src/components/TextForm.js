import React, { useState } from "react";

export default function TextForm(props) {
  const textUpperCase = () => {
    // console.log("Button Clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case." , "success");
  };

  const textLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case." , "success");

  };
  const textOnChange = (event) => {
    // console.log("Text Changed");
    setText(event.target.value);
  };

  // const colorTextRed = () => {
  //   setColor("red"); // Set the text color to red
  //   props.showAlert("Not in use" , "success");

  // };

  const clearText = () => {
    setText("");
    props.showAlert("Text cleared." , "success");

  };

  const copyText = () => {
    var text = document.getElementById('box');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied.." , "success");

  };
  const removeExtraSpaces = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" ").trim());
    props.showAlert("Extra spaces removed." , "success");

  };

  const [text, setText] = useState("");
  // const [color, setColor] = useState("black");
  return (
    <>
      <div style={{color: props.mode === 'dark'? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="box" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter text here"
            onChange={textOnChange}
            style={{backgroundColor: props.mode === 'dark'? 'grey' : 'white', color: props.mode === 'dark'? 'white' : 'black'}}
            id="box"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={textUpperCase}>
          Convert to Upper
        </button>
        <button className="btn btn-primary mx-2" onClick={textLowerCase}>
          Convert to lower
        </button>
        {/* <button className="btn btn-danger mx-2" onClick={colorTextRed}>
          Color Red
        </button> */}
        <button className="btn btn-primary mx-2" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((word) => word.length > 0).length} words and{" "}
          {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Reading minutes</p>
        <h3>Preview</h3>
        <p style={{ color: props.mode === 'dark'? 'white' : 'black' }}>{text.length>0?text:"Enter some text above to preview."} </p>
      </div>
    </>
  );
}
