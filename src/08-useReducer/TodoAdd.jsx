import React, { useState } from "react";
import useForm from "../hooks/useForm";

const TodoAdd = ({ onAddTodo }) => {
  const {description, onInputChange, onReset} = useForm({
    description: ""
  });

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    if(description.trim()){
    onAddTodo({
        id: new Date(),
        description,
        done: false
    });}
    onReset()
  }

  return (
    <>
      <h4>Add To-Do:</h4>
      <hr></hr>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={description}
          name="description"
          onChange={onInputChange}
          placeholder="What do you want to do?"
          className="form-control"
        ></input>
        <button type="submit" className="btn btn-primary mt-1">
          Add
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
