import React, { useEffect, useState } from "react";
import useForm from "../hooks/useForm";

const FormWithCustomHook = () => {
  const {formState, onInputChange, onReset, username, email, password} = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>Simple Form with Custom Hook</h1>
      <hr></hr>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      ></input>
      <input
        type="email"
        className="form-control mt-2"
        placeholder="johnsmith@email.com"
        name="email"
        value={email}
        onChange={onInputChange}
      ></input>
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      ></input>
      <button className="btn btn-primary mt-2" onClick={onReset}>Reset</button>
    </>
  );
};

export default FormWithCustomHook;
