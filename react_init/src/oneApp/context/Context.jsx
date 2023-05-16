//** === > API  Context (Big Component)  < === */
//import React from 'react'
import { createContext, useState, useEffect } from "react";
import { dataTask as data } from "../data/taskData.js";

//**? ===> Add Data that Context Component */
export const someContext = createContext();

//**? ==> Context Component */
export function ContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createList(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    console.log(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  return (
    <>
      <someContext.Provider
        value={{
          tasks,
          createList,
          deleteTask,
        }}
      >
        {props.children}
      </someContext.Provider>
    </>
  );
}
