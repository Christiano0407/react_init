//**! === === ==== Component - Event Handler ==== === === */
import "/src/App.css";

//**? ==> Handle Component */
export function Buttons() {
  function handleClick() {
    console.log("Handle Click");
  }
  return <button onClick={handleClick}>Click</button>;
}

//**? === Other Form === */
/**
 * <button onClick={function handleClick() {
  alert('You clicked me!');
}}>

<button onClick={() => {
  alert('You clicked me!');
}}>
 */

//**? >= Handler Declarative inside of a component <= */
function AlertButton({ message }) {
  return <button onClick={() => console.log(message)}></button>;
}

export function Toolbar() {
  return <AlertButton message="Play!">HandlePlay</AlertButton>;
}

export const handleChange = (e) => {
  console.log(e.target.value);
};

/**
 * <input id="hello" onChange={(e) => {
 * console.log(e.target.id / e.target.value);
 * }}>
 */
