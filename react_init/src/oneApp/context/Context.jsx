//** === > API  Context (Big Component)  < === */
//import React from 'react'
import { createContext } from "react";

//**? ===> Add Data that Context Component */
export const someContext = createContext();

//**? ==> Context Component */
export function ContextProvider(props) {
  let x = 50;
  return (
    <>
      <someContext.Provider value={x}>{props.children}</someContext.Provider>
    </>
  );
}
