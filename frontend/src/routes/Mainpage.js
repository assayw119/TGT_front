/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from 'react';
import Navbar from '../component/Navbar';
import '../static/css/grid.css';
import { useState } from 'react';
import Calendar_part from '../component/Calendar';
import Info from '../component/Mainpage/Info';
import axios from 'axios';
import Todo from '../component/Mainpage/Todo';
import Memo from '../component/Mainpage/Memo';
function Mainpage(props) {
  const [result, setResult] = useState([]);
  const [profile_info, setProfile] = useState([]);
  const [profile_info2, setProfile2] = useState([]);
  const [user_club_list, setUser_club_list] = useState([]);
  const [user_todo_list, setUser_todo_list] = useState([]);

  const get_profile = async () => {
    try {
      await axios.get('http://127.0.0.1:8000/accounts/myprofile').then(res => {
        console.log(res);
        setProfile(res.data);
        setProfile2(res.data.profile);
        setUser_club_list(res.data.user_club_list);
        setUser_todo_list(res.data.user_todo_list);
      });
    } catch (err) {
      console.log(err);
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
          <Info
            id={profile_info2.id}
            email={profile_info.email}
            username={profile_info.username}
            user_image={profile_info2.user_image}
            content={profile_info2.content}
          />
        </div>
        <div className="item calendar">
          <Calendar_part />
          <Memo />
        </div>
        <div className="item todo">
          <Todo />
        </div>
        <div className="item club_list"></div>
        <div className="item achieve"></div>
      </div>
    </>
  );
}

export default Mainpage;
