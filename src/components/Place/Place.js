import React from "react";
import "./Place.css";

const Place = ({ place, handleChoosePlace }) => {
  const { name, timeRequired, distance, picture } = place;
  return (
    <div className="place-details">
      <img src={picture} alt="" />
      <h2>{name}</h2>
      <div>
        <h4>Distance from Capital: {distance} km</h4>
        <p>
          Need <strong> {timeRequired} day/days </strong>to explore this place
        </p>
      </div>
      <button  onClick={() => handleChoosePlace(place)} className="btn-choose">
        <p id="btn-text">Choose This Place</p>
      </button>
    </div>
  );
};

export default Place;
