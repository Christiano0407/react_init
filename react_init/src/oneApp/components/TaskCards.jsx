//**! === ==== Component Task Card ==== === */
//import { Context } from "../context/Context";
import { useContext, useState } from "react";
import { someContext } from "../context/Context";
import "/src/index.css";
import "../src/css/taskList.css";

//**! ==== Component Cart Task */

export const TaskCards = ({ task }) => {
  const { deleteTask } = useContext(someContext);
  return (
    <div className="task-card bg-zinc-800 text-center ">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button
        className="btn-form delete"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
