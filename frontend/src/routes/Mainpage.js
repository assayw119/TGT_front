import React from 'react';
import Navbar from '../component/Navbar';
import '../static/css/grid.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import '../static/css/calendar.css';
import moment from 'moment';

function Mainpage(props) {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Navbar />
      <div className="mainpage_container container">
        <div className="item info"></div>
        <div className="item calendar">
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
          {console.log(moment(value).format('YYYY년 MM월 DD일'))}
          {/* <div className="text-gray-500 mt-4">
            {moment(value).format('YYYY년 MM월 DD일')}
          </div> */}
        </div>
        <div className="item todo"></div>
        <div className="item club_list"></div>
        <div className="item achieve"></div>
      </div>
    </>
  );
}

export default Mainpage;
