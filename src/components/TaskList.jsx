import React, { Children, useState } from "react";

function TaskList({ tasks, setTasks }) {
  const [show, setShow] = useState(true);
  const [compelete, setCompelete] = useState(false);

  function handleDelete(event) {
    setTasks(tasks.filter((task) => event !== task.id));
  }

  function handleCompelted(task) {
    tasks.map((task) => (task.compelted = true));
  }

  return (
    <div className="tasks">
      <div className="tittle">
        <h2>Task Lists</h2>
        <button onClick={() => setShow(!show)} className="toggle">
          {show ? "hide" : "show"}
        </button>
      </div>

      {show &&
        tasks.map((task) => (
          <li
            key={task.id}
            className={
              task.compelted && setCompelete(true) ? "compelete" : "incompelete"
            }
          >
            <span>{task.name}</span>
            <button className="select" onClick={() => setCompelete(!compelete)}>
              {compelete ? "incompelte" : "compelete"}
            </button>
            <button onClick={() => handleDelete(task.id)} className="delete">
              delete
            </button>
          </li>
        ))}
    </div>
  );
}

export default TaskList;
