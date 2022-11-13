import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../component/Navbar';
import '../static/css/grid.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function PostDetailPage(props) {
  const [club, setClub] = useState('');
  const { club_id } = useParams();
  useEffect(() => {
    get_club();
  }, []);

  const get_club = async () => {
    try {
      await axios.get(`http://127.0.0.1:8000/club/${club_id}`).then(res => {
        console.log(res);
        setClub(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container" style={{ backgroundolor: 'white' }}>
        테스트{club_id}
      </div>
    </>
  );
}

export default PostDetailPage;
