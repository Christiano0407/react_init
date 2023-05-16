//** === ==== First Component ==== === */
//import { useState } from 'react'
import "./App.css";
//** === === Application First === === */
import TasksList from "./oneApp/components/TasksList";
import { FormTask } from "./oneApp/components/FormTask";

function App() {
  return (
    <>
      <FormTask />
      <TasksList />
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
