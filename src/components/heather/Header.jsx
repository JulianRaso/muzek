import "./Header.css";
import PropTypes from "prop-types";

Header.propTypes = {
  navbarStatus: PropTypes.bool,
  handleNavbar: PropTypes.func,
};

export default function Header({ navbarStatus, handleNavbar }) {
  return (
    <div className="header">
      <a href="/" className="logo">
        MVZEK
      </a>
      <nav className="navbar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="2em"
          height="2em"
          viewBox="0 0 50 50"
          className="svgButton"
          onClick={() => handleNavbar()}
        >
          <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
        </svg>
        <div
          className={
            navbarStatus ? "nav navOptions-open" : "nav navOptions-close"
          }
        >
          <a href="/#/" onClick={() => handleNavbar()}>
            Inicio
          </a>
          <a href="/#/services" onClick={() => handleNavbar()}>
            Servicios
          </a>
          <a href="/#/clients" onClick={() => handleNavbar()}>
            Clientes
          </a>
          <a href="/#/aboutUs" onClick={() => handleNavbar()}>
            ¿Quienes Somos?
          </a>
          <button
            id="contactButton"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=5493794902259&text=Hola!+Quisiera+que+me+generen+un+presupuesto+para+un+evento.&type=phone_number&app_absent=0"
              )
            }
          >
            Contactanos
          </button>
        </div>
      </nav>
    </div>
  );
}
