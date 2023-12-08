import React, { useState } from "react";

const CounterApp = () => {
    const [{counter1, counter2, counter3}, setCounter] = useState({
        counter1: 10,
        counter2: 10,
        counter3: 10
    });
    console.log(counter1,counter2,counter3);

  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>
      <hr></hr>
      <button 
            className="btn" 
            onClick={
                ()=>setCounter((prevCounter)=>{
                    return {
                        ...prevCounter,
                        counter1: prevCounter.counter1+1,
                    }
                })
            }
        >+1</button>
      <button className="btn">-1</button>
    </>
  );
};

export default CounterApp;
