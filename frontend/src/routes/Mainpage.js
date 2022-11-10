/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from 'react';
import Navbar from '../component/Navbar';
import '../static/css/grid.css';
import { useState } from 'react';
import Calendar_part from '../component/Calendar';
import Mainpage_Info from '../component/Mainpage_Info';
import axios from 'axios';
import Mainpage_todo from '../component/Mainpage_todo';
function Mainpage(props) {
  const [result, setResult] = useState([]);
  const [profile_info, setProfile] = useState([]);
  const [user_club_list, setUser_club_list] = useState([]);
  const [user_todo_list, setUser_todo_list] = useState([]);
  const get_profile = async () => {
    try {
      await axios.get('http://127.0.0.1:8000/accounts/myprofile').then(res => {
        console.log(res);
        setProfile(res.data.profile);
        setUser_club_list(res.data.user_club_list);
        setUser_todo_list(res.data.user_todo_list);
      });
    } catch (err) {
      console.log(err);
      // //임시
      // setProfile(temp_profile_info.profile);
      // setUser_club_list(temp_profile_info.user_club_list);
      // setUser_todo_list(temp_profile_info.user_todo_list);
      // console.log(profile_info);
      // console.log(user_club_list);
    }
  };

  useEffect(() => {
    get_profile();
  }, []);

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
          <Calendar_part />
        </div>
        <div className="item todo">
          <Mainpage_todo />
        </div>
        <div className="item club_list"></div>
        <div className="item achieve"></div>
      </div>
    </>
  );
}

export default Mainpage;
