import React, { useState } from "react";

export const Textarea = (props) => {
  const [text, setText] = useState("");

  const toUpper = () => {
    const upText = text.toUpperCase();
    if (text.length > 0) {
      props.showAlert("Converted To Uppercase", "success");
      props.removeAlert();
    }

    setText(upText);
  };

  const toLower = () => {
    const lowerText = text.toLowerCase();

    setText(lowerText);
    if (text.length > 0) {
      props.showAlert("Converted To Lowercase", "success");
      props.removeAlert();
    }
  };

  const extraSpace = () => {
    const removeSpace = text.split(/[  ]+/);
    setText(removeSpace.join(" "));
    if (text.length > 0) {
      props.showAlert("Extra space has been removed", "success");

      props.removeAlert();
    }
  };

  const textChange = (event) => {
    setText(event.target.value);
  };

  const textTrim = text.trim();
  const word = textTrim.split(/\s+/);

  const filterWord = word.filter((element) => {
    return element !== "";
  });

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("coppid clipboard", "success");

    document.getSelection().removeAllRanges();

    props.removeAlert();
  };

  return (
    <>
      <div
        className="mb-3 container  my-3"
        style={{ color: props.darkMode === "light" ? "#000" : "#00ffff" }}
      >
        <h2>{props.title}</h2>
        <textarea
          className="form-control h1 my-3"
          id="Textarea"
          rows="8"
          placeholder="Enter The Text Here"
          value={text}
          onChange={textChange}
          style={{ fontSize: "1.5rem" }}
        ></textarea>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary my-1"
          onClick={toUpper}
        >
          TO UPPERCASE
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-3 my-1"
          onClick={toLower}
        >
          to lowercase
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary my-1"
          onClick={copyText}
        >
          Copy Text
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-3 my-1"
          onClick={extraSpace}
        >
          Remove Extra Space
        </button>

        <div className="my-3">
          <h2>Your Text Summary</h2>
          <p>
            Charecters : {text.length} , Words : {filterWord.length}
          </p>
          <h3>Priview Text</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};
