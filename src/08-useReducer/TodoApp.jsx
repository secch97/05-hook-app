import React from "react";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import useTodo from "../hooks/useTodo";

const TodoApp = () => {
  const { todos, handleAddTodo, handleDeleteTodo, handleToggleTodo } =
    useTodo();
  return (
    <>
      <h1>
        Todo App: Completed: {(todos.filter((todo)=>todo.done).length)} | Pending: {(todos.filter((todo)=>!todo.done).length)}{" "}
      </h1>
      <hr></hr>
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          ></TodoList>
        </div>
        <div className="col-5">
          <TodoAdd onAddTodo={handleAddTodo}></TodoAdd>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
