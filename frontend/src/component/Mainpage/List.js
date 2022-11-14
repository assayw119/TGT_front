import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function List({ clubs }) {
  //배경색 변경
  //function Mycolor() {
  //  var element = document.getElementById("myID");
  //  element.style.backgroundColor='#FFCC80';
  //};
  const navigate = useNavigate();
  return (
    <>
      <List_div>
        <Title>Club list</Title>
        <List_body>
          {clubs.map(club => {
            const imageUrl = 'http://127.0.0.1:8000' + club.image;
            const image_style2 = {
              backgroundImage: `url(${imageUrl})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '6vmin',
              height: '6vmin',
              borderRadius: '20%',
              float: 'left',
              margin: '1vmin',
            };
            return (
              <>
                <List_section
                  id="myID"
                  // onClick="Mycolor()"
                  onClick={() => {
                    navigate(`/Clubpage/${club.id}`);
                  }}
                >
                  <Club_img style={image_style2}></Club_img>
                  <List_box>
                    <Club_name>{club.name}</Club_name>
                    <List_date>
                      {club.start_date}-{club.end_date}
                    </List_date>
                  </List_box>
                </List_section>
              </>
            );
          })}
        </List_body>
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
const List_body = styled.section`
  margin: 1vmin;
  overflow: auto;
`;
const List_section = styled.div`
  min-height: 10vmin;
  margin-top: 1vmin;
  margin-bottom: 1vmin;
  cursor: pointer;
`;

const List_box = styled.div`
  margin-top: 2vmin;
  margin-bottom: 1vmin;
`;
const Club_img = styled.div`
  width: 12vmin;
  borderradius: 10px;
  float: letf;
  margin-left: 2vmin;
`;
const Club_name = styled.div`
  font-weight: 400;
  font-size: 1.5vmin;
  margin-bottom: 1vmin;
`;
const List_date = styled.section`
  font-weight: 400;
  font-size: 1vmin;
  align-itmes: center;
`;
