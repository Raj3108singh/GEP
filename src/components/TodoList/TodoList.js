import React from "react";
import TodoFooter from "../TodoFooter/TodoFooter";
import "./TodoList.css";

function TodoList({ todos, setTodos, editTask, setEditFlag }) {
  const updateTask = (id) => {
    let updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTasks);
    setEditFlag(false);
  };

  const removeTask = (id) => {
    let updatedTasks = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTasks);
  };

  const calcNumberOfIncompletedTasks = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (!todo.completed) count++;
    });
    return count;
  };

  return (
    <div className="todolist-container">
      <div className="todos-container">
        {todos.map((todo, index) => (
          <div className="todo-item todo-row">
            <div
              className={` ${todo.completed && "todo-item-active"} col-lg-9`}
              onClick={() => updateTask(todo.id)}
            >
              {todo.task}
            </div>
            <div className="col-lg-1">
              <button
                type="button"
                className="btn btn-primary edit-button"
                onClick={() => {
                  editTask(todo.task);
                  removeTask(todo.id);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
      </div>
    </div>
  );
}

export default TodoList;
