import React from "react";

const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between"
    >
      <span 
        className={`d-flex align-items-center ${todo.done && "text-decoration-line-through text-success"}`}
        onClick={()=> onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={()=>onDeleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
