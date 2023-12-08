import React, { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "secch97",
        email: "secch97@gmail.com"
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(()=>{
        console.log("email changed!");
    }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr></hr>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      ></input>
      {
        (username === "secch97") && <Message></Message>
      }
      <input
        type="email"
        className="form-control mt-2"
        placeholder="johnsmith@email.com"
        name="email"
        value={email}
        onChange={onInputChange}
      ></input>
    </>
  );
};

export default SimpleForm;
