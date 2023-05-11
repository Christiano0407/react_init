//** === ==== Component Module Layout ==== === */
//** === Imports */
import "../index.css";
import "../assets/css/layout.css";
import { Counter } from "../components/reactHooks/Counter";

//**! === Component */
export function Layout() {
  return (
    <>
      <main className="layout">
        <Counter />
      </main>
    </>
  );
}
