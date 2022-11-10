import React from 'react';
import Navbar from '../component/Navbar';
import '../static/css/grid.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import '../static/css/calendar.css';
import moment from 'moment';
import Info from '../component/Info';

function Mainpage(props) {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Navbar />
      <style>
        {`.postlist,.clubpage,.writepage{opacity:0.2}
      `}
      </style>

      <div className="mainpage_container container">
        <div className="item info">
          <Info />/
        </div>
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

const profile_info = {
  profile: {
    id: 1,
    nickname: '',
    user_image: null,
    content: null,
  },
  user_club_list: [
    {
      id: 1,
      name: 'club1',
      introduce: 'introduce1',
      content: 'content1',
      image: 'image.com',
      category: 'hobby',
      start_date: '2022-10-11',
      end_date: '2022-11-11',
      howto: 'howto',
      created_at: '2022-11-02T02:29:19.604536',
      updated_at: '2022-11-02T02:29:19.604572',
      users: [1],
      post: null,
    },
  ],
  user_todo_list: [
    {
      id: 1,
      user: 1,
      title: 'title1',
      box: false,
      club: 1,
    },
    {
      id: 2,
      user: 1,
      title: 'title2',
      box: false,
      club: 1,
    },
  ],
};
