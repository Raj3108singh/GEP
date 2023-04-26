import React, { useState } from "react";
import AddInput from "../AddInput/AddInput";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import "./Todo.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [editTodo, seteditTodo] = useState("");
  const [editFlag, setEditFlag] = useState(false);

  const editTask = (data) => {
    seteditTodo(data);
    setEditFlag(true);
  };

  return (
    <div className="todo">
      <Header title="Todo" />
      <AddInput
        setTodos={setTodos}
        todos={todos}
        editTodo={editTodo}
        editFlag={editFlag}
        setEditFlag={setEditFlag}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        editTask={editTask}
        setEditFlag={setEditFlag}
      />
    </div>
  );
}

export default Todo;
