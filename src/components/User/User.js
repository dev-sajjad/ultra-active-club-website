import React from 'react';
import img from '../../user-img.png';
import './User.css'

const User = () => {
    return (
      <div className='user-container'>
        <div className="user-info">
          <div className="user-img">
            <img src={img} alt="" />
          </div>
          <div className="user">
            <h3 className='user-name'>Fhamid Noor</h3>
            <p>
              <small>Kushtia, Bangladesh</small>
            </p>
           </div>
        </div>
        <div className='experience'>
                <p>Age: <br /> <b>25</b> Years</p>
                <p>Visited(BD): <br /><b>25</b> Districts</p>
                <p>Visited(Global): <br /><b>5</b> Countries</p>
        </div>    
      </div>
    );
};

export default User;