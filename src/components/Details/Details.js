import React from 'react';
import './Details.css';

const Details = () => {
    return (
        <div>
            <h3>Tour Plan Details</h3>
            <div className='tour-details'>
                <p>Tour time: <span className='tour-time'>0</span> days</p>
                <p>Break time: <span className='break-total'>0</span> days</p>
            </div>
            <button className='btn-execute'>
                <p>Execute Plan</p>
            </button>
        </div>
    );
};

export default Details;