import React, { useLayoutEffect, useRef, useState } from "react";

const Quote = ({ breakingQuote }) => {
  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0
  });
  useLayoutEffect(() => {
    const {height, width}=pRef.current.getBoundingClientRect()
    setBoxSize({
      width,
      height
    })
  }, []);

  return (
    <>
    <blockquote style={{ display: "flex" }} className="blockquote text-end">
      <p ref={pRef} className="mb-1">{breakingQuote.quote}</p>
      <footer className="blockquote-footer">{breakingQuote.author}</footer>
    </blockquote>
    <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

export default Quote;
