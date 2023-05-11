//** === ==== First Component ==== === */
//import { useState } from 'react'
import "./App.css";
import { Header } from "./modules/header";
import { Layout } from "./modules/layout";

function App() {
  return (
    <>
      <Header title="Hero Section" text="Paragraph components" />
      <Layout />
    </>
  );
}

export default App;
