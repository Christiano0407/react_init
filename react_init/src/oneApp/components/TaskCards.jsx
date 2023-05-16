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
    <div className="task-card bg-zinc-800 text-center rounded-lg ">
      <h2 className="font-bold text-3xl my-3">{task.title}</h2>
      <p className="font-medium  text-sm text-gray-500">{task.description}</p>
      <button
        className="btn-form delete font-bold text-xl hover:bg-red-950 border-l-orange-950 text-red-700"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
