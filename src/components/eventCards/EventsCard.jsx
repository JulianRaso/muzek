import { useState } from "react";
import PropTypes from "prop-types";
import "./EventsCard.css";

EventsCard.propTypes = {
  object: PropTypes.object,
};

export default function EventsCard({ object }) {
  const [eventData] = useState(object);
  let imgQuantity = eventData.image?.length - 1;
  const [imgPosition, setImgPosition] = useState(Math.floor(Math.random() * 4));

  function handlePosition(position) {
    if (position == "next") {
      {
        imgPosition < imgQuantity ? setImgPosition(imgPosition + 1) : null;
        imgPosition == imgQuantity ? setImgPosition(0) : null;
      }
    }
    if (position == "previous") {
      {
        imgPosition > 0 ? setImgPosition(imgPosition - 1) : null;
        imgPosition == 0 ? setImgPosition(imgQuantity) : null;
      }
    }
  }

  return (
    <div className="eventCard">
      <h2 className="title">{eventData.title}</h2>
      <div className="imageContainer">
        <button className="btn-left" onClick={() => handlePosition("previous")}>
          <img
            style={{
              width: "25px",
              height: "30px",
              rotate: "180deg",
            }}
            src="https://img.icons8.com/?size=100&id=11686&format=png&color=ffffff"
            alt="arrow--v1"
          />
        </button>
        <img src={eventData?.image[imgPosition]} alt="Event Image" />
        <button className="btn-right" onClick={() => handlePosition("next")}>
          <img
            style={{
              width: "25px",
              height: "30px",
            }}
            src="https://img.icons8.com/?size=100&id=11686&format=png&color=ffffff"
            alt="arrow--v1"
          />
        </button>
      </div>
      <div className="imageAmount">
        {object.image.map((_, i) => (
          <button
            key={i}
            className={i == imgPosition ? "fill" : ""}
            onClick={() => setImgPosition(i)}
          ></button>
        ))}
      </div>
      <p>{eventData.description}</p>
    </div>
  );
}
