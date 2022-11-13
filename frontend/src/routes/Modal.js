import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
function Modal(props) {
  const [user_club_list, setUser_club_list] = useState([]);

  const get_profile = async () => {
    try {
      await axios.get('http://127.0.0.1:8000/accounts/myprofile').then(res => {
        setUser_club_list(res.data.user_club_list);
        console.log(res.data.user_club_list);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    get_profile();
  }, []);
  return <div></div>;
}

export default Modal;
