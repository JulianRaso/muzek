import { useState } from "react";
import PropTypes from "prop-types";
import "./LandingPage.css";
import useEffectImageChanger from "../../hook/useEffectImageChanger";

LandingPage.propTypes = {
  landingPageImages: PropTypes.array,
};

export default function LandingPage({ landingPageImages }) {
  const [slideNumber, setSlideNumber] = useState(0);

  useEffectImageChanger(
    slideNumber,
    landingPageImages.length,
    setSlideNumber,
    2500
  );

  return (
    <div className="landingPage">
      <div className="leftContainer">
        <img src={landingPageImages[slideNumber]} alt="Eventos" />
      </div>

      <div className="information">
        <div className="title">Donde tus sueños se vuelven realidad</div>
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
