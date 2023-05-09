//**! === ==== Component Button ==== === */
import PropTypes from "prop-types";
import "../index.css";
//**! === Button === */
export function Button({ text }) {
  console.log(text);
  return (
    <>
      <button className="btn" id="idBtn">
        {text};
      </button>
    </>
  );
}
//**? ===> Props (text) */
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
