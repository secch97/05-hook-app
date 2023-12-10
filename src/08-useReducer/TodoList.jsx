import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos, onDeleteTodo, onToggleTodo}) => {
  return (
    <ul className="list-group">
      {/* TodoList*/}
      {todos.map((todo) => {
        return (
          //TodoItem
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
            ></TodoItem>
        );
      })}
      {/*TodoList*/}
    </ul>
  );
};

export default TodoList;
