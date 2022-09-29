import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Place from '../Place/Place';
import './Tour.css'

const Tour = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch("places-data.json")
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (
      <div className="tour-container">
        <div>
          <Header></Header>
          <h2>Explore Beautiful Places of Sylhet</h2>
          <div className='place-container'>
            {places.map((place) => (
              <Place place={place}></Place>
            ))}
          </div>
        </div>
        <div>
          <h2>tour details</h2>
        </div>
      </div>
    );
};

export default Tour;