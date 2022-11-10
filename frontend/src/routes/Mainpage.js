/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from 'react';
import Navbar from '../component/Navbar';
import '../static/css/grid.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import '../static/css/calendar.css';
import moment from 'moment';
import Mainpage_Info from '../component/Mainpage_Info';
import axios from 'axios';
function Mainpage(props) {
  const [value, onChange] = useState(new Date());
  const [profile_info, setProfile] = useState('');
  const [user_club_list, setUser_club_list] = useState('');
  const [user_todo_list, setUser_todo_list] = useState('');
  const get_profile = async () => {
    try {
      await axios.get('http://127.0.0.1:8000/accounts/regist').then(res => {
        console.log(res);
        setProfile(res.profile);
        setUser_club_list(res.user_club_list);
        setUser_todo_list(res.user_todo_list);
      });
    } catch (err) {
      console.log(err);
      //임시
      setProfile(temp_profile_info.profile);
      setUser_club_list(temp_profile_info.user_club_list);
      setUser_todo_list(temp_profile_info.user_todo_list);
      console.log(profile_info);
      console.log(user_club_list);
    }
  };

  useEffect(() => {
    get_profile();
  }, [user_club_list]);

  return (
    <>
      <Navbar />
      <style>
        {`.postlist,.clubpage,.writepage{opacity:0.2}
      `}
      </style>

      <div className="mainpage_container container">
        <div className="item info">
          <Mainpage_Info
            id={profile_info.id}
            nickname={profile_info.nickname}
            user_image={profile_info.user_image}
            content={profile_info.content}
          />
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
          {/* {console.log(moment(value).format('YYYY년 MM월 DD일'))} */}
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

const temp_profile_info = {
  profile: {
    id: 1,
    nickname: 'yaena1223',
    user_image: 'images/temp/temp_profile.jpg',
    content:
      '화이팅화이팅화이팅화이팅화이팅화이팅화이팅화이팅화이팅화이팅화이팅화이팅화이팅화이팅',
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
    {
      id: 2,
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
