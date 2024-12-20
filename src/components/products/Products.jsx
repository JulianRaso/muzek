import { useState } from "react";
import "./Products.css";
import PropTypes from "prop-types";
import useEffectImageChanger from "../../hook/useEffectImageChanger";

Products.propTypes = {
  products: PropTypes.array,
  landingImages: PropTypes.array,
  length: PropTypes.func,
  map: PropTypes.func,
};

export default function Products({ products, landingImages }) {
  const [currentPst, setCurrentPst] = useState(0);

  useEffectImageChanger(currentPst, landingImages.length, setCurrentPst, 3000);

  return (
    <div className="products">
      <div className="serviceLanding">
        <img src={landingImages[currentPst]} alt="Imagenes de productos" />
        <p>
          Contamos con más de 15 años de experiencia en el rubro de logística y
          producción de eventos. Somos reconocidos por la calidad y la
          innovación, garantizado el éxito de cada evento. Con un equipo
          altamente capacitado y lo ultimo en sonido e iluminacion,
          transformando ideas en experiencias inolvidables.
        </p>
      </div>
      <div className="servicesCards">
        {products.map((value, index) => (
          <ServicesEquipment
            key={index}
            title={value.title}
            img={value.image}
            imgDescription={"Equipo de " + value.title}
            description={value.description}
          />
        ))}
      </div>
    </div>
  );
}

ServicesEquipment.propTypes = {
  title: PropTypes.string,
  img: PropTypes.array,
  imgDescription: PropTypes.string,
  description: PropTypes.string,
};

function ServicesEquipment({ title, img, imgDescription, description }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffectImageChanger(currentSlide, img.length, setCurrentSlide, 3000);

  return (
    <div className="servicesCard">
      <img src={img[currentSlide]} alt={imgDescription} />
      <div className="serviceCard-information">
        <div id="title">{title}</div>
        <p>{description}</p>
      </div>
    </div>
  );
}
