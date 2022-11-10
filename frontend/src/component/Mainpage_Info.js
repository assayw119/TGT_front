import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
function Mainpage_Info({ id, nickname, user_image, content }) {
  const get_info = async () => {
    try {
      const response = await axios.get(
        'http://127.0.0.1:8000/accounts/myprofile/',
      );
    } catch (err) {}
  };

  const image_style = {
    backgroundImage: `url(${user_image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '10vmin',
    height: '10vmin',
    borderRadius: '50%',
    float: 'left',
    marginRight: '2vmin',
  };

  return (
    <Container>
      <Profile>
        <div style={image_style}></div>
        <Intro_text>
          <Nickname>{nickname}</Nickname>
          <Content>{content}</Content>
        </Intro_text>
      </Profile>
      <Number></Number>
    </Container>
  );
}

export default Mainpage_Info;

const Container = styled.div`
  box-sizing: border-box;
  padding: 2vmin;
  display: flex;
  align-items: center;
  height: 100%;
`;

const Profile = styled.div`
  float: left;
  width: 50%;
`;
const Intro_text = styled.div``;
const Nickname = styled.section`
  font-weight: 600;
  font-size: 2vmin;
  margin: 1vmin;
`;

const User_image = styled.div``;
const Content = styled.section`
  margin: 1vmin;
  word-break: break-all;
`;

const Number = styled.div`
  float: right;
`;
