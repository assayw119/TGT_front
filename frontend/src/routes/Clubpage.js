import React from 'react';
import Navbar from '../component/Navbar';
import '../static/css/grid.css';
import Calendar from 'react-calendar';
import '../static/css/calendar.css';
import moment from 'moment';
import { useState } from 'react';
function Clubpage(props) {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Navbar />
      <style>
        {`.postlist,.mainpage,.writepage{opacity:0.2}
      `}
      </style>
      <div className="clubpage_container container">
        <div className="clubpage_item"></div>
        <div className="clubpage_item"></div>
        <div className="clubpage_item">
          <Calendar
            onChange={onChange}
            locale="en"
            value={value}
            format={(locale, date) => date.toLocaleString('en')}
            formatMonthYear={(locale, date) =>
              date.toLocaleString('kr', {
                month: 'numeric',
                year: 'numeric',
              })
            }
            formatDay={(locale, date) =>
              date.toLocaleString('en', {
                day: 'numeric',
              })
            }
            next2Label={null}
            prev2Label={null}
            showNeighboringMonth={false}
          />
        </div>
        <div className="clubpage_item"></div>
        <div className="clubpage_item"></div>
      </div>
    </>
  );
}

export default Clubpage;
