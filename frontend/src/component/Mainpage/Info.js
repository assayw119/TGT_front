import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
function Info({ id, email, username, user_image, content }) {
  const imageUrl = 'http://127.0.0.1:8000' + user_image;
  const image_style = {
    backgroundImage: `url(${imageUrl})`,
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
          <Nickname>{username}</Nickname>
          <Email>{email}</Email>
          <Content>{content}</Content>
        </Intro_text>
      </Profile>
      <Number></Number>
    </Container>
  );
}

export default Info;

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

const Content = styled.section`
  margin: 1vmin;
  font-size: 1.5vmin;
  word-break: break-all;
`;

const Number = styled.div`
  float: right;
`;

const Email = styled.section`
  mix-blend-mode: normal;
  opacity: 0.4;
  font-size: 1.5vmin;
  margin-bottom: 2vmin;
`;
