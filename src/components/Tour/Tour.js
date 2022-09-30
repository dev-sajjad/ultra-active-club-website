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
        <h3>Some Important Questions And Answers</h3>
        <div className='questions'>
          <div className='question'>
            <h4>Quesitons: How does ReactJS works?</h4>
            <p>
              <strong>Answer:</strong>ReactJS creates different Elements by
              using JSX. JSX is JS syntax extension embed with HTML codes.
              Elements creates a copy of actual DOM called as Virtual-DOM. If
              any data changes React immediately creates Virtual-DOM instead of
              changing actual DOM. When a new Virtual-DOM is created it find the
              difference between previous Virtual-DOM and new Virtual-DOM by
              using Diff-algorithm. And finally ReactJS update that specific
              part in the actual DOM.
            </p>
          </div>
          <div>
            <h4>Quesitons: Difference between state and props</h4>
            <p>
              <strong>Answer:</strong>1. Props are used to sent data from one
              component to other. we can sent variable, function, array, object
              etc. as props from parent to child component. State can update
              data within the component. 2. Props are read-only, you cannot
              update the value. One can update and modify state. 3.Props are
              immutable. State is mutable. 4.Props are external and controlled
              by whatever renders the component. The State is internal and
              controlled by the React Component itself.
            </p>
          </div>
          <div>
            <h4>Quesitons: What are the different usage of useEffect?</h4>
            <p>
              <strong>Answer:</strong>useEffect can be used in 6 different
              purpose. 1. Fetch API data. 2. Validating input field every time
              the input changes. 3.Live filtering an array 'on the fly' by
              typing letters into an input element. 4. Trigger animation when
              array value get changes 5. Update paragraph list on fetched API
              data update 6. Updating fetched API data to get BTC updated price.
            </p>
          </div>
        </div>
      </div>
      <div className="details-container">
        <User place={day}></User>
      </div>
    </div>
  );
};

export default Tour;