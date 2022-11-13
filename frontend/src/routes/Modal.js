import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Modal({ club }) {
  //   const get_profile = async () => {
  //     try {
  //       await axios.get('http://127.0.0.1:8000/accounts/myprofile').then(res => {
  //         setUser_club_list(res.data.user_club_list);
  //         console.log(res.data.user_club_list);
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  const navigate = useNavigate();
  useEffect(() => {
    // get_profile();
  }, []);

  return (
    <div
      style={{
        boxSizing: 'border-box',
        marginLeft: '6%',
        position: 'fixed',
        background: 'orange',
        borderRadius: '10px',
        fontSize: '2.5vmin',
        width: '17vmin',
        padding: '3vmin',
        color: 'black',
      }}
    >
      {club.map(c => {
        const onclick = () => {
          navigate(`/Clubpage/${c.id}`);
        };
        return (
          <section
            style={{ fontWeight: 600, margin: '1vmin', cursor: 'pointer' }}
            onClick={onclick}
          >
            {c.name}
          </section>
        );
      })}
    </div>
  );
}

export default Modal;
