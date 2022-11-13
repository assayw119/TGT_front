import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function List(props) {
    useEffect(() => {
        get_club_list();
      }, [])
    const [club_list, setClubList] = useState([]);
    const get_club_list = async () => {
      try {
        await axios.get('http://127.0.0.1:8000/club/').then(res => {
          console.log(res);
          setClubList(res.data);
        });
      } catch (err) {
        console.log(err);
      }
    };
  return (
    <>
      <List_div>
        <Title>Club list</Title>

        <div className="list_img">
          {club_list.image}
        </div>
        <div className="list_name">
          {club_list.name}
        </div>
        <div className="list_date">
          {club_list.date}
        </div>
      </List_div>
    </>
  );
}

export default List;
const List_div = styled.div`
  margin: 7.5%;
`;
const Title = styled.section`
  font-size: 3vmin;
  font-weight: 600;
`;