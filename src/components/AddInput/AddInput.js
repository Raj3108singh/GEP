import React, { useState } from "react";
import "./AddInput.css";
import { v4 } from "uuid";

function AddInput({ setTodos, todos, editTodo, editFlag, setEditFlag }) {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (!todo && !editTodo) return;

    let updatedTodos = [
      ...todos,
      {
        id: v4(),
        task: `${!todo ? editTodo : todo}`,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo("");
    setEditFlag(false);
  };

  const onChange = (e) => {
    setTodo(e.target.value);
    setEditFlag(false);
  };

  return (
    <div className="input-container">
      <input
        className="input"
        value={editFlag ? editTodo : todo}
        onChange={(e) => onChange(e)}
        placeholder="Add a new task here..."
      />
      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default AddInput;
