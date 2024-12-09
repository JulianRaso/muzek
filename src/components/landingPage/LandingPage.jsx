import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./LandingPage.css";

LandingPage.propTypes = {
  landingPageImages: PropTypes.array,
};

export default function LandingPage({ landingPageImages }) {
  const images = landingPageImages;
  const [slideNumber, setSlideNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideNumber < images.length - 1) {
        setSlideNumber(() => slideNumber + 1);
      } else {
        setSlideNumber(0);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [slideNumber, setSlideNumber, images]);

  return (
    <div className="landingPage">
      <div className="leftContainer">
        <img src={images[slideNumber]} alt="Eventos" />
      </div>

      <div className="information">
        <div>
          <h2>Donde tus sueños se vuelven realidad</h2>
        </div>
        <div className="companyDescription">
          <p>
            Sabemos que cada evento cuenta una historia, y estamos aquí para
            ayudarte a narrarla de la mejor manera. Somos expertos en logística
            y producción de eventos, ofreciendo diseños unicos para que cada
            detalle de tu evento sea perfecto.
          </p>
          <p>
            Ya sea un evento íntimo o un gran espectáculo, nuestro objetivo es
            superar tus expectativas y hacer que cada detalle se vea reflejado
            en una noche unica e inigualable.
          </p>
        </div>
      </div>
    </div>
  );
}
