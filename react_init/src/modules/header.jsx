//** === Component Header ===  */
import "../assets/css/header.css";
import img from "../assets/icon/icons8-cloud-100.png";
import imgHero from "../assets/img/people.jpg";

export function Header(props) {
  console.log(props);
  return (
    <>
      <header className="header">
        <nav className="navbar" id="idNavbar">
          <div className="navbar-logo">
            <figure className="logo-figure">
              <img className="logo-img" src={img} />
            </figure>
            <span>Cloud</span>
          </div>
          <div className="navbar-list">
            <ul className="navbar-ul">
              <li className="navbar-item">first</li>
              <li className="navbar-item">Second</li>
              <li className="navbar-item">Third</li>
              <li className="navbar-item">Four</li>
            </ul>
          </div>
        </nav>
        <section className="header-hero" id="idHero">
          <div className="hero-images">
            <figure className="hero-figure">
              <img className="img-hero" src={imgHero} />
            </figure>
          </div>
          <div className="hero-text">
            <h2>Title: {props.title}</h2>
            <p>Paragraph: {props.text}</p>
          </div>
        </section>
      </header>
    </>
  );
}
