import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Place from '../Place/Place';
import User from '../User/User';
import './Tour.css'

const Tour = () => {
  const [places, setPlaces] = useState([]);
  const [place, setPlace] = useState([]);

  useEffect(() => {
    fetch("places-data.json")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  const handleChoosePlace = (addPlace) => {
    const newPlace = [...place, addPlace];
      setPlace(newPlace);
      
    };
    
  return (
    <div className="tour-container">
      <div>
        <Header></Header>
        <div className="main-header">
          <h2 className="header-title">Explore Beautiful Places of Sylhet</h2>
        </div>

        <div className="place-container">
          {places.map((place) => (
            <Place
              place={place}
              key={place.id}
              handleChoosePlace={handleChoosePlace}
            ></Place>
          ))}
        </div>
      </div>
      <div className="details-container">
        <User place={place}></User>
      </div>
    </div>
  );
};

export default Tour;