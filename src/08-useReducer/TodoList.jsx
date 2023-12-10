import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos}) => {
  return (
    <ul className="list-group">
      {/* TodoList*/}
      {todos.map((todo) => {
        return (
          //TodoItem
          <TodoItem key={todo.id} todo={todo}></TodoItem>
        );
      })}
      {/*TodoList*/}
    </ul>
  );
};

export default TodoList;
