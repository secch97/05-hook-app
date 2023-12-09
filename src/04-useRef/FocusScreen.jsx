import React, { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();
  const onFocusClick = () => {
    console.log(inputRef.current.focus());
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr></hr>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        className="form-control"
      ></input>
      <button className="btn btn-primary mt-2" onClick={onFocusClick}>
        Set focus
      </button>
    </>
  );
};

export default FocusScreen;
