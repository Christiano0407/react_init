//** === ==== First Component ==== === */
import { useState, useEffect } from "react";
import { dataTask as data } from "./oneApp/data/taskData";
//import { useState } from 'react'
import "./App.css";
//** === === Application First === === */
import TasksList from "./oneApp/components/TasksList";
import { FormTask } from "./oneApp/components/FormTask";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createList(task) {
    setTasks([...tasks, tasks]);
  }

  return (
    <>
      <FormTask createList={createList} />
      <TasksList tasks={tasks} />
    </>
  );
}

export default App;

//** === === ======== First Practice React ========== === === */
/**
 * import { Header } from "./modules/header";
   import { Layout } from "./modules/layout";
 *  <Header title="Hero Section" text="Paragraph components" />
      <Layout />
 */
