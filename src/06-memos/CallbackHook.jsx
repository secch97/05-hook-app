import React, { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    ()=>{
        setCounter((value)=>value+1)
    }, []
  )

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr></hr>
      <ShowIncrement increment={increment}></ShowIncrement>
    </>
  );
};

export default CallbackHook;
