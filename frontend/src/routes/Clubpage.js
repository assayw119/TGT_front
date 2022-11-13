import React from 'react';
import Navbar from '../component/Navbar';
import '../static/css/grid.css';
import Calendar from 'react-calendar';
import '../static/css/calendar.css';
import moment from 'moment';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Calendar_part from '../component/Calendar';
function Clubpage() {
  const { club_id } = useParams();
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
          <Calendar_part />
        </div>
        <div className="clubpage_item"></div>
      </div>
    </>
  );
}

export default Clubpage;
