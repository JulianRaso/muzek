import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./EventsCard.css";

EventsCard.propTypes = {
  object: PropTypes.object,
};

export default function EventsCard({ object }) {
  const [eventData] = useState(object);
  let imgQuantity = eventData.image?.length - 1;
  const [imgPosition, setImgPosition] = useState(Math.floor(Math.random() * 4));

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgPosition <= imgQuantity - 1) {
        setImgPosition(() => imgPosition + 1);
      } else {
        setImgPosition(0);
      }
    }, 2500);
    return () => {
      clearInterval(interval);
    };
  }, [imgPosition, setImgPosition, imgQuantity]);

  return (
    <div className="eventCard">
      <h2 className="title">{eventData.title}</h2>
      <div className="cardImage">
        <img src={eventData?.image[imgPosition]} alt="Event Image" />
      </div>
      <div className="imageControllers">
        {object.image.map((_, i) => (
          <button
            key={i}
            style={
              i == imgPosition ? { backgroundColor: "rgb(224,233,242)" } : {}
            }
            onClick={() => setImgPosition(i)}
          ></button>
        ))}
      </div>
      <span>{eventData.description}</span>
    </div>
  );
}