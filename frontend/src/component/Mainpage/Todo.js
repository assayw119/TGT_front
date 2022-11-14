/* eslint-disable no-unused-expressions */
import { normalizeUnits } from 'moment';
import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Todo({ date, clubs }) {
  const [input, setInput] = useState([]);

  const [data, setData] = useState({
    club: '',
    title: '',
  });

  const post_todo = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/club/todolist', data).then();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Todo_div>
        <Title>To do List</Title>
        <Todo_body>
          {clubs.map(club => {
            return (
              <>
                <Club>
                  <ClubName>{club.name}</ClubName>

                  <Input
                    placeholder="오늘의 할 일을 입력해주세요"
                    onChange={e => {
                      setData({ club: club.id, title: e.target.value });
                    }}
                  ></Input>
                  <Plus_icon
                    src="images/plus.png"
                    onClick={post_todo}
                  ></Plus_icon>
                </Club>
                <br />
              </>
            );
          })}
        </Todo_body>
      </Todo_div>
    </>
  );
}

export default Todo;
const Todo_div = styled.div`
  margin: 7.5%;
  height: 100%;
  overflow-y: auto;
`;

const Todo_body = styled.div`
  height: 80%;
  max-height: 80%;
  overflow-y: auto;
`;
const Title = styled.section`
  font-size: 3vmin;
  font-weight: 600;
`;

const ClubName = styled.h3`
  box-sizing: border-box;
  background: #ff9900;
  border-radius: 6px;
  padding: 1vmin;
  text-align: center;
  margin-bottom: 0;
  width: 100%;
`;

const Club = styled.div`
  min-height: 13vmin;
`;
const Input = styled.input`
  box-sizing: border-box;
  background: #ffdfae;
  border-radius: 5px 0 0 5px;
  margin-top: 0;
  border: none;
  &:focus {
    outline: none;
  }
  width: 94%;
  padding: 0.7vmin;
  height: 3vmin;
  font-family: 'DMSans';
  display: flex;
  float: left;
`;

const Plus_icon = styled.img`
  box-sizing: border-box;
  width: 6%;
  cursor: pointer;
  height: 3vmin;
  background: #ffdfae;
  border-radius: 0px 5px 5px 0;
  padding: 0.4vmin;
`;
