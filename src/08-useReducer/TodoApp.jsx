import React, { useReducer } from "react";
import todoReducer from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Collect soul stone",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Collect power stone",
    done: false,
  },
];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleAddTodo = (todo) => {
    console.log(todo);
  };

  return (
    <>
      <h1>
        Todo App: Completed: {10} | Pending: {10}{" "}
      </h1>
      <hr></hr>
      <div className="row">
        <div className="col-7">
            <TodoList todos={todos}></TodoList>
        </div>
        <div className="col-5">
          <TodoAdd onAddTodo={handleAddTodo}></TodoAdd>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
