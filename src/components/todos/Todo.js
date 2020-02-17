import React from "react";

const Todo = ({ erase, todo }) => {
  console.log(todo);

  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => erase(todo.id)}>DELETE</button>
    </div>
  );
};

export default Todo;
