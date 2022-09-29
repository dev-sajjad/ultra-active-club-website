import React from 'react';
import Header from '../Header/Header';
import './Tour.css'

const Tour = () => {
    return (
        <div className='tour-container'>
            <div>
                <Header></Header>
            </div>
            <div>
                <h2>tour details</h2>
            </div>
        </div>
    );
};

export default Tour;