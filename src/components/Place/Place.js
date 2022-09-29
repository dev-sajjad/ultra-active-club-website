import React from 'react';
import './Place.css'

const Place = (props) => {
    const { id, name, timeRequired, distance, picture } = props.place;
    console.log(props)
    return (
        <div className='place-details'>
            <img src={picture} alt="" />
        </div>
    );
};

export default Place;