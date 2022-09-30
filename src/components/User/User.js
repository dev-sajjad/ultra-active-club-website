import React, { useState } from 'react';
import img from '../../user-img.png';
import './User.css'

const User = ({ place }) => {
  const [breaks, setBreaks] = useState(0);

  
let total = 0;
for (const singlePlace of place) {
  total = total + singlePlace.timeRequired;
}

  const buttons = document.getElementsByClassName('click-btn')

  for (let button of buttons) {
    button.addEventListener('click', (e) => {
      const buttonValue = parseInt(e.target.innerText)
      let breakTime = 0;
      if (buttonValue === 1) {
        breakTime = breakTime + 1;
      } else if (buttonValue === 2) {
        breakTime = breakTime + 2;
      } else if (buttonValue === 3) {
        breakTime = breakTime + 3;
      } else if (buttonValue === 4) {
        breakTime = breakTime + 4;
      } else if (buttonValue === 5) {
        breakTime = breakTime + 5;
      }
      setBreaks(breakTime);
    })
  }

    return (
      <div className="user-container">
        {/* user info */}
        <div className="user-info">
          <div className="user-img">
            <img src={img} alt="" />
          </div>
          <div className="user">
            <h3 className="user-name">Fhamid Noor</h3>
            <p>
              <small>Kushtia, Bangladesh</small>
            </p>
          </div>
        </div>
        <div className="experience">
          <p>
            Age: <br /> <b>25</b> Years
          </p>
          <p>
            Visited(BD): <br />
            <b>25</b> Districts
          </p>
          <p>
            Visited(Global): <br />
            <b>5</b> Countries
          </p>
        </div>
        {/* break time section */}
        <div className="add-break">
          <h3>Add A Break On Tour</h3>
          <div className="break-time">
            <p className="click-btn">1</p>
            <p className="click-btn">2</p>
            <p className="click-btn">3</p>
            <p className="click-btn">4</p>
            <p className="click-btn">5</p>
          </div>
          <div>
            {/* tour plan details */}
            <h3>Tour Plan Details</h3>
            <div className="tour-details">
              <p>
                Tour time: <span className="tour-time">{total}</span> days
              </p>
              <p>
                Break time: <span className="break-total">{breaks}</span> days
              </p>
            </div>
            <button className="btn-execute">
              <p>Execute Plan</p>
            </button>
          </div>
        </div>
      </div>
    );
};

export default User;