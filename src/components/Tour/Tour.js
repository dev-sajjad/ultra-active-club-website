import React, { useEffect, useState } from 'react';
import { addToDb, getSavedDay } from '../../utilities/fakedb';
import Header from '../Header/Header';
import Place from '../Place/Place';
import User from '../User/User';
import './Tour.css'

const Tour = () => {
  const [places, setPlaces] = useState([]);
  const [day, setDay] = useState([]);

  useEffect(() => {
    fetch("places-data.json")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  useEffect(() => {
    const storedDay = getSavedDay();
    const storedSavedDay = [];
    for (const id in storedDay) {
      const addedPlace = places.find(singleDay => singleDay.id === id) 
      if(addedPlace) {
        const tourTime = storedDay[id];
        addedPlace.timeRequired = tourTime;
        storedSavedDay.push(addedPlace);
      }
    }
    setDay(storedSavedDay)
  }, [places])

  const handleChoosePlace = (addPlace) => {
    const newPlace = [...day, addPlace];
      setDay(newPlace);
    addToDb(addPlace);
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
        <User place={day}></User>
      </div>
    </div>
  );
};

export default Tour;