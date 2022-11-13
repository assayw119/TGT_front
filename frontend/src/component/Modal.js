import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Modal({ club }) {
  const navigate = useNavigate();
  useEffect(() => {
    // get_profile();
  }, []);

  return (
    <div
      style={{
        boxSizing: 'border-box',
        marginLeft: '4%',
        position: 'fixed',
        background: 'orange',
        borderRadius: '10px',
        fontSize: '2.5vmin',
        width: '20vmin',
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
